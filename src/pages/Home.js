import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import NavUser from '../components/NavUser'
import Skill from '../components/Skill'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axiosHelper from '../helpers/axios.helper.'

const Home = () => {
  const navigate = useNavigate()
  const token = useSelector(state => state.auth.token)
  const [employeeLists, setEmployeeLists] = useState([])
  const [sortBy, setSortBy] = useState('')
  const [sort, setSort] = useState('ASC')
  const [search, setSearch] = React.useState('')
  const [submit, setSubmit] = React.useState('')
  const [count, setCount] = React.useState(1)
  const [page, setPage] = React.useState(1)

  useEffect(() => {
    getEmployeeLists()
  }, [sortBy, sort, search, page])

  const selectSort = value => {
    if (value === 'skills') {
      setSortBy('skills')
      setSort('ASC')
    } else if (value === 'freelance') {
      setSortBy('workTime')
      setSort('ASC')
    } else if (value === 'fulltime') {
      setSortBy('workTime')
      setSort('DESC')
    }
  }
  const increment = () => {
    if (count === 2) {
      return false
    } else {
      setPage(page + 1)
      return setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count === 1) {
      return false
    } else {
      setPage(page - 1)
      return setCount(count - 1)
    }
  }

  const getEmployeeLists = async () => {
    try {
      const response = await axiosHelper.get(
        `/employeelists?search=${search}&page=${page}&sortBy=${sortBy}&sort=${sort}`
      )
      setEmployeeLists(response.data.results)
    } catch (error) {
      setEmployeeLists([])
    }
  }

  // Get user
  const [user, setUser] = useState(null)
  useEffect(() => {
    getUser().then(response => {
      setUser(response?.data?.results)
    })
  }, [token])
  const getUser = async () => {
    console.log('Hello')
    try {
      const response = await axiosHelper.get('/profile/employee', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
     return response
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='hidden md:block'>
        <NavUser />
      </div>
      <div className='md:hidden bg-[#E5E5E5]'>
        <div className='flex md:hidden bg-primary px-5 py-10 rounded-br-2xl'>
          <div className='flex-1'>
            <p className='text-white'>Hai, {user?.fullName || null}</p>
          </div>
          <div class='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
                color='white'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                />
              </svg>

              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              />
              <span class='badge badge-sm indicator-item'>1</span>
            </div>
        </div>
        </div>
      <header className='hidden bg-primary h-[50px] w-full px-[100px] md:flex items-center'>
        <h1 className='text-white text-[28px] font-bold leading-[20px]'>
          Top Jobs
        </h1>
      </header>
      <main className='bg-[#E5E5E5] px-5 lg:px-[100px] py-[30px]'>
        <section className='hidden md:block w-full p-[5px] bg-white relative rounded-[8px]'>
          <input
            type='text'
            placeholder='Search for any skill'
            className='h-[50px] outline-none w-full pl-[10px]'
            onChange={e => setSubmit(e.target.value)}
          />
          <div className='flex items-center absolute right-[10px] top-[25%]'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </div>
            <hr className='mx-[8px] h-[35px] w-[2px] bg-[#9EA0A5]' />
            <select
              onChange={e => selectSort(e.target.value)}
              className='outline-none w-[100px]'
            >
              <option hidden selected>
                Kategori
              </option>
              <option value='skills'>Sortir berdasarkan Skill</option>
              <option value='freelance'>Sortir berdasarkan Freelance</option>
              <option value='fulltime'>Sortir berdasarkan Fulltime</option>
            </select>
            <button
              onClick={() => setSearch(submit)}
              className='btn-primary w-[100px] h-[35px] rounded-[5px] ml-[5px]'
            >
              Search
            </button>
          </div>
        </section>
        <section className='w-full bg-white rounded-[8px] my-[40px]'>
          {employeeLists?.map(data => (
            <div
              key={data.id}
              className='border-b-[1px] border-[#eaeaea] flex flex-col md:flex-row items-center py-[35px]'
            >
              <div class='avatar mx-[20px]'>
                <div class='w-[100px] rounded-full'>
                  <img
                    src={data.picture || require('../assets/images/user.png')}
                    alt='avatar'
                  />
                </div>
              </div>
              <div className='flex items-center md:items-start md:flex-1 flex-col gap-2'>
                <h1 className='text-[#1F2A36] text-[22px] text-center md:text-start font-semibold'>
                  {data.fullName}
                </h1>
                <p className='text-[#9EA0A5] text-[14px] text-center md:text-start'>
                  {data.jobDesk} - {data.workTime}
                </p>
                <div className='flex items-center text-[#9EA0A5] text-[14px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='w-6 h-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                    />
                  </svg>
                  <span className='ml-[5px]'>{data.domicile}</span>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {data.skills?.map((item, index) => (
                    <Skill key={index} value={item} />
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  navigate(`/profile-portofolio/${data.id}`)
                }}
                className='btn-primary w-[120px] h-[55px] rounded-[5px] mr-[5%] my-5 md:my-0'
              >
                Lihat Profile
              </button>
            </div>
          ))}
        </section>
        <section className='flex items-center justify-center'>
          <div
            className='w-[45px] h-[40px] cursor-pointer bg-white rounded-[5px] flex items-center justify-center font-bold hover:bg-primary hover:text-white mr-[10px]'
            onClick={decrement}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </div>
          <div className='w-[45px] h-[40px] cursor-pointer rounded-[5px] flex items-center justify-center font-bold bg-primary text-white mr-[10px]'>
            {count}
          </div>
          <div
            className='w-[45px] h-[40px] cursor-pointer bg-white rounded-[5px] flex items-center justify-center font-bold hover:bg-primary hover:text-white mr-[10px]'
            onClick={increment}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
