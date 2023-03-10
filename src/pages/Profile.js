import axiosHelper from '../helpers/axios.helper.'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Skill from '../components/Skill'
import jwt_decode from 'jwt-decode'
import NavUser from '../components/NavUser'
import { useNavigate } from 'react-router-dom'

const ProfileRecruiter = () => {
  const [recruiter, setRecruiter] = useState({})
  const token = useSelector(state => state.auth.token)
  const navigate = useNavigate()

  const fetchProfileRecruiter = async () => {
    try {
      const response = await axiosHelper.get('/profile/recruiter', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setRecruiter(response.data.results)
    } catch (error) {
      if (error) throw error
    }
  }

  useEffect(() => {
    fetchProfileRecruiter()
  }, [])

  return (
    <>
      {/* Header / Navbar */}
      <NavUser />

      {/* Content */}
      <main className='bg-[#E5E5E5] px-[100px] py-[40px]'>
        <div className='bg-primary h-[20vh] rounded-t-[8px]'></div>
        <div className='bg-white flex flex-col items-center justify-center rounded-b-[8px] pb-[20vh]'>
          <div className='avatar mt-[-10vh] mb-[30px]'>
            <div className='w-[120px] rounded-full'>
              {recruiter?.picture ? (
                <img src={recruiter.picture} alt='avatar' className='avatar' />
              ) : (
                <img
                  src={require('../assets/images/user.png')}
                  alt='avatar'
                  className='avatar'
                />
              )}
            </div>
          </div>
          <h1 className='text-[#1F2A36] text-[22px] font-semibold mb-[10px]'>
            {recruiter?.companyName}
          </h1>
          <p className='text-[14px] text-[#1F2A36] mb-[10px]'>
            {recruiter?.companyField}
          </p>
          <div className='flex items-center text-[#9EA0A5] text-[14px] mb-[15px]'>
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
            <span className='ml-[5px]'>{recruiter?.domicile}</span>
          </div>
          <div className='desc text-center text-[#9EA0A5] w-[600px] mb-[20px]'>
            {recruiter?.description}
          </div>
          <button
            onClick={() => navigate('/edit-recruiter')}
            className='btn btn-md btn-primary text-white w-[250px] mb-[30px]'
          >
            Edit Profile
          </button>
          <div className='flex flex-col gap-3 text-[14px]'>
            <div className='text-[#9EA0A5] flex items-center gap-3'>
              <img alt='' src={require('../assets/images/mail.png')} />
              <p>{recruiter?.email}</p>
            </div>
            <div className='text-[#9EA0A5] flex items-center gap-3'>
              <img alt='' src={require('../assets/images/instagram.png')} />
              <p>{recruiter?.instagram}</p>
            </div>
            <div className='text-[#9EA0A5] flex items-center gap-3'>
              <img alt='' src={require('../assets/images/phone.png')} />
              <p>{recruiter?.phoneNumber}</p>
            </div>
            <div className='text-[#9EA0A5] flex items-center gap-3'>
              <img alt='' src={require('../assets/images/linkedin.png')} />
              <p>{recruiter?.linkedIn}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className='bg-primary hidden md:block px-10 md:px-20 lg:px-28 py-10 font-sans'>
        <div className='w-2/6 mb-16'>
          <img
            className='mb-8 w-28'
            src={require('../assets/images/FFS-removebg.png')}
            alt='logo'
          />
          <p className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
        </div>
        <div>
          <hr />
          <div className='flex mt-5 gap-20'>
            <p className='flex-1 text-white'>
              2020 Pewworld. All right reserved
            </p>
            <p className='text-white'>Telepon</p>
            <p className='text-white'>Email</p>
          </div>
        </div>
      </div>

      <div className='bg-slate-100 md:hidden'>
        <div className='flex px-10 py-5 bg-white border-[1px] rounded-t-3xl'>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img src={require('../assets/images/grid.png')} alt='grid' />
          </div>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img src={require('../assets/images/search.png')} alt='search' />
          </div>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img src={require('../assets/images/message.png')} alt='message' />
          </div>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img
              src={require('../assets/images/fotoProfileBawah.png')}
              alt='foto-profile'
            />
          </div>
        </div>
      </div>
    </>
  )
}

const ProfileEmployee = () => {
  // get profile employee data
  const [employee, setEmployee] = useState({})
  const token = useSelector(state => state.auth.token)
  const decode = jwt_decode(token)
  const userId = decode.id

  const navigate = useNavigate()

  const fetchProfile = async () => {
    try {
      const response = await axiosHelper.get('/profile/employee', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setEmployee(response.data.results)
    } catch (error) {
      if (error) throw error
    }
  }
  useEffect(() => {
    fetchProfile()
  }, [])

  // Get portofolio employee data
  const [portofolioEmployee, setPortofolioEmployee] = useState([])

  useEffect(() => {
    getPortofolioEmployee()
  }, [])
  const getPortofolioEmployee = async () => {
    try {
      const { data } = await axiosHelper.get(`/portfolioEmployee/${userId}`)
      setPortofolioEmployee(data.results)
    } catch (error) {
      if (error) throw error
    }
  }

  // Get work experience employee
  const [workExperienceEmployee, setWorkExperienceEmployee] = useState([])

  useEffect(() => {
    getWorkExperienceEmployee()
  }, [])
  const getWorkExperienceEmployee = async () => {
    try {
      const { data } = await axiosHelper.get(`/workExperience/${userId}`)
      setWorkExperienceEmployee(data.results)
    } catch (error) {
      if (error) throw error
    }
  }

  // Show Portofolio or Work Experience
  const [portofolioList, setPortofolioList] = useState(true)
  const [workExperienceList, setWorkExperienceList] = useState(false)

  const showPortofolio = () => {
    setPortofolioList(true)
    setWorkExperienceList(false)
  }
  const showWorkExperience = () => {
    setPortofolioList(false)
    setWorkExperienceList(true)
  }

  return (
    <>
      {/* Header / Navbar */}
      <NavUser />

      {/* Profile Portofolio */}
      <div className='flex bg-slate-100 gap-5 px-10 md-px-20 lg:px-28 py-10 font-sans flex-col lg:flex-row'>
        {/* Left */}
        <div className='flex-[35%]'>
          <div className='bg-white p-8 rounded-lg'>
            <div className='flex justify-center items-center mb-5'>
              {employee?.picture ? (
                <img
                  className='rounded-full w-[150px] avatar'
                  src={employee?.picture}
                  alt='profile'
                />
              ) : (
                <img
                  className='p-3 w-[150px] avatar'
                  src={require('../assets/images/user.png')}
                  alt='profile'
                />
              )}
            </div>
            <div>
              <h3 className='font-bold text-xl md:text-2xl mb-2'>
                {employee?.fullName}
              </h3>
              <p className='font-bold mb-2'>{employee?.jobDesk}</p>
              <p className='mb-3'>{employee?.workTime}</p>
              <div className='flex items-center gap-3 mb-2'>
                <img
                  className='inline'
                  src={require('../assets/images/map.png')}
                  alt='map'
                />
                <p>{employee?.domicile}</p>
              </div>
              <div className='flex items-center gap-3 mb-3'>
                <img
                  className='inline'
                  src={require('../assets/images/phone.png')}
                  alt='map'
                />
                <p>{employee?.phoneNumber}</p>
              </div>
              <p className='mb-4'>{employee?.description}</p>
            </div>
            <div className='mb-8'>
              <button
                onClick={() => navigate('/edit-employee')}
                className='w-full h-12 bg-primary text-white text-lg font-bold border-2 border-primary rounded'
              >
                Edit Profile
              </button>
            </div>
            <h4 className='font-bold text-xl md:text-2xl mb-5'>Skill</h4>
            <div className='flex flex-wrap gap-3 mb-10'>
              {employee?.skills?.map(skill => {
                return (
                  <div key={skill.id}>
                    <Skill value={skill} />
                  </div>
                )
              })}
            </div>
            <div className='flex items-center gap-3 mb-5'>
              <img
                className='inline'
                src={require('../assets/images/mail.png')}
                alt='map'
              />
              <p>{employee?.email}</p>
            </div>
            <div className='flex items-center gap-3 mb-5'>
              <img
                className='inline'
                src={require('../assets/images/instagram.png')}
                alt='map'
              />
              <p>{employee?.instagram}</p>
            </div>
            <div className='flex items-center gap-3 mb-5'>
              <img
                className='inline'
                src={require('../assets/images/github.png')}
                alt='map'
              />
              <p>{employee?.github}</p>
            </div>
            <div className='flex items-center gap-3 mb-5'>
              <img
                className='inline'
                src={require('../assets/images/Vector.png')}
                alt='map'
              />
              <p>{employee?.gitlab}</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='flex-[65%]'>
          <div className='bg-white rounded-lg p-8'>
            <div className='flex items-center gap-10 mb-8'>
              <div
                onClick={showPortofolio}
                className={
                  portofolioList ? 'py-3 border-b-4 rounded border-primary' : ''
                }
              >
                <h3
                  className={
                    portofolioList
                      ? 'font-bold text-xl md:text-2xl cursor-pointer'
                      : 'text-xl md:text-2xl cursor-pointer hover:font-bold'
                  }
                >
                  Portofolio
                </h3>
              </div>
              <div
                onClick={showWorkExperience}
                className={
                  workExperienceList
                    ? 'py-3 border-b-4 rounded border-primary'
                    : ''
                }
              >
                <h3
                  className={
                    workExperienceList
                      ? 'font-bold text-xl md:text-2xl cursor-pointer'
                      : 'text-xl md:text-2xl cursor-pointer hover:font-bold'
                  }
                >
                  Pengalaman kerja
                </h3>
              </div>
            </div>
            {/* Portofolio */}
            {portofolioList ? (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {portofolioEmployee?.map(portofolio => {
                  return (
                    <div
                      className='flex flex-col gap-1 items-center justify-center'
                      key={portofolio.id}
                    >
                      <img
                        className='w-[185px] h-[125px] text-center border-2 border-none rounded p-5 bg-slate-300'
                        src={portofolio.picture}
                        onError={
                          (portofolio.picture = require('../assets/images/gallery.png'))
                        }
                        alt={portofolio.appName}
                      />
                      <p>{portofolio.appName}</p>
                    </div>
                  )
                })}
              </div>
            ) : (
              false
            )}

            {/* Work Experience */}
            {workExperienceList ? (
              <div className='grid grid-cols-1 gap-3'>
                {workExperienceEmployee?.map(job => {
                  return (
                    <div className='flex gap-10 mb-5' key={job.id}>
                      <div>
                        <img
                          className='w-[70px]'
                          src={require('../assets/images/suitcase.png')}
                          alt='job'
                        />
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-lg font-bold'>{job.position}</h3>
                        <h5>{job.company}</h5>
                        <div className='flex gap-5 text-slate-500 mb-3'>
                          <h5>
                            {job.joinDate.split('T')[0]} to{' '}
                            {job.endDate.split('T')[0]}{' '}
                          </h5>
                          <h5>
                            {new Date(job.endDate).getMonth() -
                              new Date(job.joinDate).getMonth()}{' '}
                            months
                          </h5>
                        </div>
                        <p>{job.jobDescription}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='bg-primary hidden md:block px-10 md:px-20 lg:px-28 py-10 font-sans'>
        <div className='w-2/6 mb-16'>
          <img
            className='mb-8 w-28'
            src={require('../assets/images/FFS-removebg.png')}
            alt='logo'
          />
          <p className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
        </div>
        <div>
          <hr />
          <div className='flex mt-5 gap-20'>
            <p className='flex-1 text-white'>
              2020 Pewworld. All right reserved
            </p>
            <p className='text-white'>Telepon</p>
            <p className='text-white'>Email</p>
          </div>
        </div>
      </div>

      <div className='bg-slate-100 md:hidden'>
        <div className='flex px-10 py-5 bg-white border-[1px] rounded-t-3xl'>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img src={require('../assets/images/grid.png')} alt='grid' />
          </div>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img src={require('../assets/images/search.png')} alt='search' />
          </div>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img src={require('../assets/images/message.png')} alt='message' />
          </div>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img
              src={require('../assets/images/fotoProfileBawah.png')}
              alt='foto-profile'
            />
          </div>
        </div>
      </div>
    </>
  )
}

const Profile = () => {
  const token = useSelector(state => state.auth.token)
  const decode = jwt_decode(token)
  const { role } = decode

  return <>{role === 1 ? <ProfileEmployee /> : <ProfileRecruiter />}</>
}

export default Profile
