/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import NavUser from '../components/NavUser'
import { FileUploader } from 'react-drag-drop-files'
import { useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'

const EditEmployee = () => {
  const token = useSelector(state => state.auth.token)
  const decoded = jwt_decode(token)
  const navigate = useNavigate()
  const userId = decoded.id
  const [profileEmployee, setProfileEmployee] = useState({})
  const [fullName, setFullName] = useState('')
  const [jobDesk, setJobDesk] = useState('')
  const [workTimes, setWorkTimes] = useState('')
  const [domicile, setDomicile] = useState('')
  const [instagram, setInstagram] = useState('')
  const [github, setGithub] = useState('')
  const [gitlab, setGitlab] = useState('')
  const [description, setDescription] = useState('')

  // get data profile employee
  useEffect(() => {
    getProfileEmployee()
  }, [])
  const getProfileEmployee = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/profileEmployee/update/${userId}`
      )
      setProfileEmployee(data.results)
    } catch (error) {
      console.log(error)
      setProfileEmployee({})
    }
  }

  // Update personal data
  const [showAlertPersonalData, setShowAlertPersonalData] = useState(false)
  const updatePersonalData = async e => {
    e.preventDefault()
    const { dataUser } = await axios.patch(
      `${process.env.REACT_APP_API_URL}/users/${userId}`,
      {
        fullName
      }
    )
    const { dataProfileEmployee } = await axios.patch(
      `${process.env.REACT_APP_API_URL}/profileEmployee/${userId}`,
      {
        jobDesk,
        workTimeId: workTimes,
        domicile,
        instagram,
        github,
        gitlab,
        description
      }
    )
    const data = { dataUser, dataProfileEmployee }
    getProfileEmployee()
    setShowAlertPersonalData(true)
    return data
  }

  // get data skills
  const [dataSkills, setDataSkills] = useState([])
  useEffect(() => {
    getDataSkills()
  }, [])
  const getDataSkills = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/skill`)
      setDataSkills(data?.results)
    } catch (error) {
      setDataSkills([])
    }
  }

  // get data employee skills
  const [dataEmployeeSkills, setDataEmployeeSkills] = useState([])
  useEffect(() => {
    getDataEmployeeSkills()
  }, [])
  const getDataEmployeeSkills = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/employeeSkill/${userId}`
      )
      setDataEmployeeSkills(data?.results)
    } catch (error) {
      setDataEmployeeSkills([])
    }
  }

  // Add employee skill
  const [skillId, setSkillId] = useState(null)
  const [showAddSkill, setShowAddSkill] = useState(false)
  const addEmployeeSkill = async e => {
    e.preventDefault()
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/employeeSkill`,
      { userId, skillId }
    )
    getDataEmployeeSkills()
    setShowAddSkill(true)
    setShowDeleteSkill(false)
    return data
  }

  // Delete employee skill
  const [showDeleteSkill, setShowDeleteSkill] = useState(false)
  const deleteSkill = async employeeSkillId => {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_URL}/employeeSkill/${employeeSkillId}`
    )
    getDataEmployeeSkills()
    setShowDeleteSkill(true)
    setShowAddSkill(false)
    return data
  }

  // Add work experience
  const [position, setPosition] = useState('')
  const [company, setCompany] = useState('')
  const [joinDate, setJoinDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [jobDescription, setJobDescription] = useState(null)
  const [showExperience, setShowExprerience] = useState(false)

  const addWorkExperience = async e => {
    e.preventDefault()
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/workExperience`,
      {
        userId,
        position,
        company,
        joinDate,
        endDate,
        jobDescription
      }
    )
    setShowExprerience(true)
    return data
  }

  // Add portofolio employee
  const [errorPortofolio, setErrorPortofolio] = useState('')
  const [appName, setAppName] = useState('')
  const [repositoryLink, setRepositoryLink] = useState('')
  const [appPicture, setAppPicture] = useState(null)
  const fileTypes = ['JPG', 'PNG', 'GIF']

  const handleChange = file => {
    // console.log(file)
    if (file.size > 3000000) {
      alert('File too large')
      return
    }
    // console.log('masuk')
    setAppPicture(file)
  }

  const addPortofolioEmployee = async e => {
    e.preventDefault()
    try {
      const temporary = new FormData()
      temporary.append("appName", appName)
      temporary.append("repositoryLink", repositoryLink)
      temporary.append("appPicture", appPicture)
      temporary.append("userId", userId)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/portfolioEmployee`, temporary)
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_API_URL}/portfolioEmployee`,
        // {
        //   appName,
        //   repositoryLink,
        //   picture: appPicture,
        //   userId
        // }
      // )
      alert('update sukses')
      return data
    } catch (error) {
      console.log(error)
    }

  }
  // console.log(profileEmployee);

  // upload foto profil
  const [modalUpload, setModalUpload] = React.useState(false);
  const [selectPic, setSelectPic] = React.useState(null);
  const [uploadWrong, setUploadWrong] = React.useState(null);

  const changePicture = (value) =>{
    setUploadWrong(null)
    const change = value.target.files[0]
    const format = ["jpg", "png", "jpeg"];
    if(format.includes(change.type.slice(6))){
      if(change.size <= 5000000){
        setSelectPic(change)
        setUploadWrong(null)
      }else{
        setUploadWrong('file size must under 5MB')
        setModalUpload(!modalUpload)
      }
    } else {
      setUploadWrong('file extention must jpg, jpeg, or png')
      setModalUpload(!modalUpload)
    }
  }

  const uploadPicture = async (pic) => {
    try {
      const temporary = new FormData()
      temporary.append("picture", pic)
      console.log(pic)
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/users/${userId}`, temporary
      );
      setUploadWrong('Upload Foto has been success')
      setModalUpload(!modalUpload)
      setSelectPic(null)

    } catch (error) {
      setUploadWrong('error in fecth')
      setModalUpload(!modalUpload)
      setSelectPic(null)
    }
  }

  const closeModalUpload = () => {
    setModalUpload(!modalUpload)
    setSelectPic(null)
  }

  return (
    <>
      <NavUser />
      <div>
      {modalUpload && <div className="fixed top-0  overflow-auto w-full h-screen bg-black/70 z-0 flex justify-center items-center">
          <div className="modal-box relative">
            <div onClick={() => {closeModalUpload()}} className="btn btn-sm btn-circle absolute right-2 top-2">✕</div>
            <p className="py-4">Please choose your file</p>
            <div>
              <input onChange={changePicture} type="file" className="file-input w-full max-w-xs" />
            </div>
            <button onClick={() => {uploadPicture(selectPic)}} className={selectPic ? "btn mt-4" : "btn btn-disabled"}>upload</button>
          </div>
        </div>}
      <section className='bg-primary h-[40vh]'></section>
      <section className='bg-[#E5E5E5] px-[100px] pb-[20vh]'>
        <div className='flex flex-col md:flex-row lg:flex-row gap-x-[50px]'>
          <section className='mt-[-20vh]'>
            <div className='card-profile bg-white rounded-[8px] py-[30px] px-5'>
              <div className='avatar w-full'>
                <div className='w-[150px] rounded-full mx-auto'>
                  {profileEmployee?.picture ? (
                    <img src={profileEmployee?.picture} alt='profile' />
                  ) : (
                    <img
                      className='p-3'
                      src={profileEmployee.picture ? profileEmployee.picture : require('../assets/images/user.png')}
                      alt='profile'
                    />
                  )}
                </div>
              </div>
              <Link>
                <div onClick={() => {setModalUpload(!modalUpload)}} className='flex items-center justify-center gap-1 mt-[10px] mb-[50px]'>
                  <img alt='' src={require('../assets/images/pen-edit.png')} />
                  <p className='text-[#9EA0A5]'>Edit</p>
                </div>
              </Link>
              {uploadWrong && <div className="text-red-500">{uploadWrong}</div>}
              <h1 className='text-[#1F2A36] text-[22px] font-semibold mb-[10px]'>
                {profileEmployee?.fullName}
              </h1>
              <p className='text-[14px] text-[#1F2A36] mb-[5px] font-semibold'>
                {profileEmployee?.jobDesk}
              </p>
              <p className='text-[14px] text-[#1F2A36] mb-[15px]'>
                {profileEmployee?.name}
              </p>
              <div className='flex items-center text-[#9EA0A5] text-[14px] mb-[5px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
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
                <span className='ml-[5px]'>{profileEmployee?.domicile}</span>
              </div>
              <div className='flex items-center text-[#9EA0A5] text-[14px] mb-[15px]'>
                <img alt='' src={require('../assets/images/phone.png')} />
                <span className='ml-[5px]'>{profileEmployee?.phoneNumber}</span>
              </div>
              <p className='desc text-[#9EA0A5] text-[14px] leading-[24px]'>
                {profileEmployee?.description}
              </p>
            </div>
            <button
              onClick={() => navigate('/reset-password')}
              className='btn btn-md btn-primary btn-block my-[20px]'
            >
              Ubah Password
            </button>
            <button
              onClick={() => navigate('/profile')}
              className='btn btn-md btn-outline btn-primary btn-block'
            >
              Kembali
            </button>
          </section>
          <section className='mt-[5%] md:mt-[-20vh] lg:mt-[-20vh] flex flex-col gap-[20px]'>
            <form
              onSubmit={updatePersonalData}
              className='bg-white py-[30px] px-5 rounded-[8px] overflow-hidden'
            >
              <h1 className='text-[22px] font-semibold'>Data Diri</h1>
              <hr className='bg-[#C4C4C4] h-[2px] mx-[-25px] my-[30px]' />
              <div className='mb-[15px]'>
                <label className='label' htmlFor='name'>
                  <span className='label-text text-[16px]'>Nama Lengkap</span>
                </label>
                <input
                  defaultValue={profileEmployee?.fullName}
                  onChange={e =>
                    setFullName(e.target.value) &
                    setShowAlertPersonalData(false)
                  }
                  type='text'
                  id='name'
                  placeholder='Masukkan nama lengkap'
                  className='input input-bordered w-full min-w-[100%]'
                />
              </div>
              <div className='mb-[15px]'>
                <label className='label' htmlFor='jobdesk'>
                  <span className='label-text text-[16px]'>Job desk</span>
                </label>
                <input
                  defaultValue={profileEmployee?.jobDesk}
                  onChange={e =>
                    setJobDesk(e.target.value) & setShowAlertPersonalData(false)
                  }
                  type='text'
                  id='jobdesk'
                  placeholder='Masukkan job desk'
                  className='input input-bordered w-full min-w-[100%]'
                />
              </div>
              <div className='mb-[15px]'>
                <label className='label' htmlFor='jobdesk'>
                  <span className='label-text text-[16px]'>Work Time</span>
                </label>
                <select
                  onChange={e =>
                    setWorkTimes(e.target.value) &
                    setShowAlertPersonalData(false)
                  }
                  className='select select-bordered w-full min-w-[100%]'
                >
                  <option value='1'>Fulltime</option>
                  <option value='2'>Freelance</option>
                </select>
              </div>
              <div className='mb-[15px]'>
                <label className='label' htmlFor='domisili'>
                  <span className='label-text text-[16px]'>Domisili</span>
                </label>
                <input
                  defaultValue={profileEmployee?.domicile}
                  onChange={e =>
                    setDomicile(e.target.value) &
                    setShowAlertPersonalData(false)
                  }
                  type='text'
                  id='domisili'
                  placeholder='Masukkan domisili'
                  className='input input-bordered w-full min-w-[100%]'
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2'>
                <div className='mb-[15px]'>
                  <label className='label' htmlFor='instagram'>
                    <span className='label-text text-[16px]'>Instagram</span>
                  </label>
                  <input
                    defaultValue={profileEmployee?.instagram}
                    onChange={e =>
                      setInstagram(e.target.value) &
                      setShowAlertPersonalData(false)
                    }
                    type='text'
                    id='instagram'
                    placeholder='Masukkan instagram'
                    className='input input-bordered w-full min-w-[100%]'
                  />
                </div>
                <div className='mb-[15px]'>
                  <label className='label' htmlFor='github'>
                    <span className='label-text text-[16px]'>Github</span>
                  </label>
                  <input
                    defaultValue={profileEmployee?.github}
                    onChange={e =>
                      setGithub(e.target.value) &
                      setShowAlertPersonalData(false)
                    }
                    type='text'
                    id='github'
                    placeholder='Masukkan github'
                    className='input input-bordered w-full min-w-[100%]'
                  />
                </div>
                <div className='mb-[15px]'>
                  <label className='label' htmlFor='gitlab'>
                    <span className='label-text text-[16px]'>Gitlab</span>
                  </label>
                  <input
                    defaultValue={profileEmployee?.gitlab}
                    onChange={e =>
                      setGitlab(e.target.value) &
                      setShowAlertPersonalData(false)
                    }
                    type='text'
                    id='gitlab'
                    placeholder='Masukkan gitlab'
                    className='input input-bordered w-full min-w-[100%]'
                  />
                </div>
              </div>
              <div className=''>
                <label className='label' htmlFor='deskripsi'>
                  <span className='label-text text-[16px]'>Deskripsi singkat</span>
                </label>
                <textarea
                  defaultValue={profileEmployee?.description}
                  onChange={e =>
                    setDescription(e.target.value) &
                    setShowAlertPersonalData(false)
                  }
                  type='text'
                  id='deskripsi'
                  placeholder='Masukkan deskripsi singkat'
                  className='input input-bordered w-full min-w-[100%] h-[100px]'
                />
              </div>
              {showAlertPersonalData ? (
                <p className='text-green-500 text-2xl font-bold'>
                  Data diri berhasil diubah.
                </p>
              ) : (
                false
              )}
              <div className='w-full text-right mt-5'>
                <button className='btn btn-warning w-[80px] text-white'>
                  Simpan
                </button>
              </div>
            </form>
            <div className='bg-white py-[30px] px-5 rounded-[8px] overflow-hidden'>
              <h1 className='text-[22px] font-semibold'>Skill</h1>
              <hr className='bg-[#C4C4C4] h-[2px] mx-[-25px] my-[30px]' />
              <form
                onSubmit={addEmployeeSkill}
                className='flex flex-col md:flex-row lg:flex-row gap-5 mb-[15px]'
              >
                <select
                  onChange={e =>
                    setSkillId(e.target.value) &
                    setShowAddSkill(false) &
                    setShowDeleteSkill(false)
                  }
                  type='text'
                  id='skill'
                  className='input input-bordered w-full'
                >
                  {dataSkills?.map(skill => {
                    return (
                      <option key={skill.id} value={skill.id}>
                        {skill.name}
                      </option>
                    )
                  })}
                </select>
                <button className='btn btn-warning w-[80px] text-white'>
                  Simpan
                </button>
              </form>
              <div className='flex gap-3'>
                {dataEmployeeSkills?.map(skill => {
                  return (
                    <div
                      className='bg-warning flex items-center max-w-fit text-[14px] p-2 rounded-[5px] text-white gap-1'
                      key={skill.id}
                    >
                      <p className='mr-[8px]'>{skill.name}</p>
                      <button>
                        <img
                          alt=''
                          src={require('../assets/images/edit-skill.png')}
                        />
                      </button>
                      <button>
                        <img
                          onClick={() => deleteSkill(skill.id)}
                          alt=''
                          src={require('../assets/images/trash.png')}
                        />
                      </button>
                    </div>
                  )
                })}
              </div>
              {showAddSkill ? (
                <p className='text-green-500 text-2xl font-bold mt-3'>
                  Skill berhasil ditambahkan
                </p>
              ) : (
                false
              )}
              {showDeleteSkill ? (
                <p className='text-red-500 text-2xl font-bold mt-3'>
                  Skill berhasil dihapus
                </p>
              ) : (
                false
              )}
            </div>
            <form
              onSubmit={addWorkExperience}
              className='bg-white py-[30px] px-5 rounded-[8px] overflow-hidden'
            >
              <h1 className='text-[22px] font-semibold'>Pengalaman Kerja</h1>
              <hr className='bg-[#C4C4C4] h-[2px] mx-[-25px] my-[30px]' />
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                <div className='mb-[15px]'>
                  <label className='label' htmlFor='perusahaan'>
                    <span className='label-text text-[16px]'>Nama Perusahaan</span>
                  </label>
                  <input
                    onChange={e =>
                      setCompany(e.target.value) & setShowExprerience(false)
                    }
                    type='text'
                    id='perusahaan'
                    className='input input-bordered w-full min-w-[100%]'
                  />
                </div>
                <div className='mb-[15px]'>
                  <label className='label' htmlFor='posisi'>
                    <span className='label-text text-[16px]'>Posisi</span>
                  </label>
                  <input
                    onChange={e =>
                      setPosition(e.target.value) & setShowExprerience(false)
                    }
                    type='text'
                    id='posisi'
                    className='input input-bordered w-full min-w-[100%]'
                  />
                </div>
              </div>
              <div className='grid grid-grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                <div className='mb-[15px]'>
                  <label className='label' htmlFor='dateStart'>
                    <span className='label-text text-[16px]'>Tanggal Masuk</span>
                  </label>
                  <input
                    onChange={e =>
                      setJoinDate(e.target.value) & setShowExprerience(false)
                    }
                    type='date'
                    id='dateStart'
                    className='input input-bordered w-full min-w-[100%]'
                  />
                </div>
                <div className='mb-[15px]'>
                  <label className='label' htmlFor='dateEnd'>
                    <span className='label-text text-[16px]'>Tanggal Keluar</span>
                  </label>
                  <input
                    onChange={e =>
                      setEndDate(e.target.value) & setShowExprerience(false)
                    }
                    type='date'
                    id='dateEnd'
                    className='input input-bordered w-full min-w-[100%]'
                  />
                </div>
              </div>
              <div className='mb-[15px]'>
                <label className='label' htmlFor='jobdesc'>
                  <span className='label-text text-[16px]'>Deskripsi singkat</span>
                </label>
                <textarea
                  onChange={e =>
                    setJobDescription(e.target.value) &
                    setShowExprerience(false)
                  }
                  type='text'
                  id='jobdesc'
                  placeholder='Masukkan deskripsi pekerjaan anda'
                  className='input input-bordered w-full min-w-[100%] h-[100px]'
                />
              </div>
              <hr className='bg-[#eaeaea] h-[2px]' />
              <button className='btn btn-warning btn-outline btn-block text-white my-[20px]'>
                Tambah Pengalaman Kerja
              </button>
              {showExperience ? (
                <p className='text-green-500 text-2xl font-bold text-center mb-3'>
                  Pengalaman kerja berhasil ditambahkan
                </p>
              ) : (
                false
              )}
              <hr className='bg-[#eaeaea] h-[2px]' />
            </form>
            <form
              onSubmit={addPortofolioEmployee}
              className='bg-white py-[30px] px-5 rounded-[8px] overflow-hidden'
            >
              <h1 className='text-[22px] font-semibold'>Portofolio</h1>
              <hr className='bg-[#C4C4C4] h-[2px] mx-[-25px] my-[30px]' />
              <div className='mb-[15px]'>
                <label className='label' htmlFor='nameApp'>
                  <span className='label-text text-[16px]'>Nama aplikasi</span>
                </label>
                <input
                  onChange={e => setAppName(e.target.value)}
                  type='text'
                  id='nameApp'
                  placeholder='Masukkan nama aplikasi'
                  className='input input-bordered w-full min-w-[100%]'
                />
              </div>
              <div className='mb-[15px]'>
                <label className='label' htmlFor='linkRepo'>
                  <span className='label-text text-[16px]'>Link repository</span>
                </label>
                <input
                  onChange={e => setRepositoryLink(e.target.value)}
                  type='text'
                  id='linkRepo'
                  placeholder='Masukkan link repository'
                  className='input input-bordered w-full min-w-[100%]'
                />
              </div>
              <div className='mb-[15px] cursor-pointer'>
                <span className='label-text text-[12px] md:text-[16px] lg:text-[16px]'>Upload gambar</span>
                <div className='w-full outline-dashed outline-2 outline-[#9EA0A5] rounded-[8px] mt-[5px] py-[50px] flex flex-col justify-start items-center text-[#1F2A36]'>
                  <img alt='' src={require('../assets/images/drag.png')} />
                  <p className='my-[10px]'>
                    Drag & Drop untuk Upload Gambar Aplikasi Mobile
                  </p>
                  <div>
                  <FileUploader
                    handleChange={handleChange}
                    name='file'
                    types={fileTypes}
                  />
                  </div>
                  <span className='text-[14px] mb-[20px]'>
                    Atau cari untuk mengupload file dari direktorimu.
                  </span>
                </div>
              </div>
              <hr className='bg-[#eaeaea] h-[2px]' />
              <button className='btn btn-warning btn-outline btn-block text-white my-[20px]'>
                Tambah Portofolio
              </button>
              <hr className='bg-[#eaeaea] h-[2px]' />
            </form>
          </section>
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}

export default EditEmployee
