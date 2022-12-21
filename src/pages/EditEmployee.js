import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavUser from "../components/NavUser";
import { FileUploader } from "react-drag-drop-files";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const EditEmployee = () => {
  const token = useSelector((state) => state.auth.token)
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
      const {data} = await axios.get(`http://localhost:8888/profileEmployee/update/${userId}`)
      setProfileEmployee(data.results)
    } catch (error) {
      setProfileEmployee({})
    }
  }

  // Update personal data
  const updatePersonalData = async (e) => {
    e.preventDefault()
    const {dataUser} = await axios.patch(`http://localhost:8888/users/${userId}`, {
      fullName,
    })
    const {dataProfileEmployee} = await axios.patch(`http://localhost:8888/profileEmployee/${userId}`, {
      jobDesk,
      workTimes,
      domicile,
      instagram,
      github,
      gitlab,
      description
    })
    const data = {dataUser, dataProfileEmployee}
    getProfileEmployee()
    return data
  }

  // get data skills
  const [dataSkills, setDataSkills] = useState([])
  useEffect(() => {
    getDataSkills()
  }, [])
  const getDataSkills = async () => {
    try {
      const {data} = await axios.get(`http://localhost:8888/skill`)
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
      const {data} = await axios.get(`http://localhost:8888/employeeSkill/${userId}`)
      setDataEmployeeSkills(data?.results)
    } catch (error) {
      setDataEmployeeSkills([])
    }
  }

  // Add employee skill
  const [skillId, setSkillId] = useState(null)
  const addEmployeeSkill = async (e) => {
    e.preventDefault()
    const {data} = await axios.post(`http://localhost:8888/employeeSkill`, {userId, skillId})
    getDataEmployeeSkills()
    return data
  }

  // Delete employee skill
  const deleteSkill = async (employeeSkillId) => {
    const {data} = await axios.delete(`http://localhost:8888/employeeSkill/${employeeSkillId}`)
    getDataEmployeeSkills()
    return data
  }

  // Add work experience
  const [position, setPosition] = useState('')
  const [company, setCompany] = useState('')
  const [joinDate, setJoinDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [jobDescription, setJobDescription] = useState(null)

  const addWorkExperience = async (e) => {
    e.preventDefault()
    const {data} = await axios.post(`http://localhost:8888/workExperience`, {
      userId,
      position,
      company,
      joinDate,
      endDate,
      jobDescription
    })
    return data
  }

  // Add portofolio employee
  const [appName, setAppName] = useState('')
  const [repositoryLink, setRepositoryLink] = useState('')
  const [appPicture, setAppPicture] = useState(null)
  const fileTypes = ["JPG", "PNG", "GIF"];

  const handleChange = (file) => {
    setAppPicture(file.name);
  }

  const addPortofolioEmployee = async (e) => {
    e.preventDefault()
    const {data} = await axios.post(`http://localhost:8888/portfolioEmployee`, {
      appName,
      repositoryLink,
      appPicture,
      userId
    })
    return data
  }
  console.log(profileEmployee)

  return (
    <>
      <NavUser />
      <section className="bg-primary h-[40vh]"></section>
      <section className="bg-[#E5E5E5] px-[100px] pb-[20vh]">
        <div className="flex gap-x-[50px]">
          <section className="mt-[-20vh] w-[30%]">
            <div className="card-profile bg-white rounded-[8px] py-[30px] px-5">
              <div className="avatar w-full">
                <div className="w-[150px] rounded-full mx-auto">
                  <img src={profileEmployee?.picture} alt="avatar" />
                </div>
              </div>
              <Link>
                <div className="flex items-center justify-center gap-1 mt-[10px] mb-[50px]">
                  <img alt="" src={require("../assets/images/pen-edit.png")} />
                  <p className="text-[#9EA0A5]">Edit</p>
                </div>
              </Link>
              <h1 className="text-[#1F2A36] text-[22px] font-semibold mb-[10px]">
                {profileEmployee?.fullName}
              </h1>
              <p className="text-[14px] text-[#1F2A36] mb-[5px] font-semibold">
                {profileEmployee?.jobDesk}
              </p>
              <p className="text-[14px] text-[#1F2A36] mb-[15px]">{profileEmployee?.name}</p>
              <div className="flex items-center text-[#9EA0A5] text-[14px] mb-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="ml-[5px]">{profileEmployee?.domicile}</span>
              </div>
              <div className="flex items-center text-[#9EA0A5] text-[14px] mb-[15px]">
                <img alt="" src={require("../assets/images/phone.png")} />
                <span className="ml-[5px]">{profileEmployee?.phoneNumber}</span>
              </div>
              <p className="desc text-[#9EA0A5] text-[14px] leading-[24px]">
                {profileEmployee?.description}
              </p>
            </div>
            <button onClick={() => navigate('/reset-password')} className="btn btn-md btn-primary btn-block my-[20px]">
              Ubah Password
            </button>
            <button onClick={()=> navigate('/job-experience')} className="btn btn-md btn-outline btn-primary btn-block">
              Kembali
            </button>
          </section>
          <section className="mt-[-20vh] w-[70%] flex flex-col gap-[20px]">
            <form onSubmit={updatePersonalData} className="bg-white py-[30px] px-5 rounded-[8px] overflow-hidden">
              <h1 className="text-[22px] font-semibold">Data Diri</h1>
              <hr className="bg-[#C4C4C4] h-[2px] mx-[-25px] my-[30px]" />
              <div className="mb-[15px]">
                <label class="label" for="name">
                  <span class="label-text text-[16px]">Nama Lengkap</span>
                </label>
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  id="name"
                  placeholder="Masukkan nama lengkap"
                  class="input input-bordered w-full min-w-[100%]"
                />
              </div>
              <div className="mb-[15px]">
                <label class="label" for="jobdesk">
                  <span class="label-text text-[16px]">Job desk</span>
                </label>
                <input
                  onChange={(e) => setJobDesk(e.target.value)}
                  type="text"
                  id="jobdesk"
                  placeholder="Masukkan job desk"
                  class="input input-bordered w-full min-w-[100%]"
                />
              </div>
              <div className="mb-[15px]">
                <label class="label" for="jobdesk">
                  <span class="label-text text-[16px]">Work Time</span>
                </label>
                <select onChange={(e) => setWorkTimes(e.target.value)} class="select select-bordered w-full min-w-[100%]">
                  <option value='1'>Full Time</option>
                  <option value='2'>Part Time</option>
                </select>
              </div>
              <div className="mb-[15px]">
                <label class="label" for="domisili">
                  <span class="label-text text-[16px]">Domisili</span>
                </label>
                <input
                  onChange={(e) => setDomicile(e.target.value)}
                  type="text"
                  id="domisili"
                  placeholder="Masukkan domisili"
                  class="input input-bordered w-full min-w-[100%]"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="mb-[15px]">
                  <label class="label" for="instagram">
                    <span class="label-text text-[16px]">Instagram</span>
                  </label>
                  <input
                    onChange={(e) => setInstagram(e.target.value)}
                    type="text"
                    id="instagram"
                    placeholder="Masukkan instagram"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
                <div className="mb-[15px]">
                  <label class="label" for="github">
                    <span class="label-text text-[16px]">Github</span>
                  </label>
                  <input
                    onChange={(e) => setGithub(e.target.value)}
                    type="text"
                    id="github"
                    placeholder="Masukkan github"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
                <div className="mb-[15px]">
                  <label class="label" for="gitlab">
                    <span class="label-text text-[16px]">Gitlab</span>
                  </label>
                  <input
                    onChange={(e) => setGitlab(e.target.value)}
                    type="text"
                    id="gitlab"
                    placeholder="Masukkan gitlab"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
              </div>
              <div className="mb-[15px]">
                <label class="label" for="deskripsi">
                  <span class="label-text text-[16px]">Deskripsi singkat</span>
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  id="deskripsi"
                  placeholder="Masukkan deskripsi singkat"
                  class="input input-bordered w-full min-w-[100%] h-[100px]"
                />
              </div>
              <div className="w-full text-right">
                <button className="btn btn-warning w-[80px] text-white">
                  Simpan
                </button>
              </div>
            </form>
            <div className="bg-white py-[30px] px-5 rounded-[8px] overflow-hidden">
              <h1 className="text-[22px] font-semibold">Skill</h1>
              <hr className="bg-[#C4C4C4] h-[2px] mx-[-25px] my-[30px]" />
              <form onSubmit={addEmployeeSkill} className="flex gap-5 mb-[15px]">
                <select
                  onChange={(e) => setSkillId(e.target.value)}
                  type="text"
                  id="skill"
                  class="input input-bordered w-full"
                >
                  {dataSkills?.map((skill) => {
                    return(
                    <option value={skill.id}>{skill.name}</option>
                    )
                  })}
                </select>
                <button className="btn btn-warning w-[80px] text-white">
                  Simpan
                </button>
              </form>
              <div className="flex gap-3">
                {dataEmployeeSkills?.map((skill) => {
                  return(
                    <div className="bg-warning flex items-center max-w-fit text-[14px] p-2 rounded-[5px] text-white gap-1">
                      <p className="mr-[8px]">{skill.name}</p>
                      <button>
                        <img
                          alt=""
                          src={require("../assets/images/edit-skill.png")}
                        />
                      </button>
                      <button>
                        <img onClick={() => deleteSkill(skill.id)} alt="" src={require("../assets/images/trash.png")} />
                      </button>
                    </div>
                  )
                })}
              </div>

            </div>
            <form onSubmit={addWorkExperience} className="bg-white py-[30px] px-5 rounded-[8px] overflow-hidden">
              <h1 className="text-[22px] font-semibold">Pengalaman Kerja</h1>
              <hr className="bg-[#C4C4C4] h-[2px] mx-[-25px] my-[30px]" />
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-[15px]">
                  <label class="label" for="perusahaan">
                    <span class="label-text text-[16px]">Nama Perusahaan</span>
                  </label>
                  <input
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    id="perusahaan"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
                <div className="mb-[15px]">
                  <label class="label" for="posisi">
                    <span class="label-text text-[16px]">Posisi</span>
                  </label>
                  <input
                    onChange={(e) => setPosition(e.target.value)}
                    type="text"
                    id="posisi"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-[15px]">
                  <label class="label" for="dateStart">
                    <span class="label-text text-[16px]">Tanggal Masuk</span>
                  </label>
                  <input
                    onChange={(e) => setJoinDate(e.target.value)}
                    type="date"
                    id="dateStart"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
                <div className="mb-[15px]">
                  <label class="label" for="dateEnd">
                    <span class="label-text text-[16px]">Tanggal Keluar</span>
                  </label>
                  <input
                    onChange={(e) => setEndDate(e.target.value)}
                    type="date"
                    id="dateEnd"
                    class="input input-bordered w-full min-w-[100%]"
                  />
                </div>
              </div>
              <div className="mb-[15px]">
                <label class="label" for="jobdesc">
                  <span class="label-text text-[16px]">Deskripsi singkat</span>
                </label>
                <textarea
                  onChange={(e) => setJobDescription(e.target.value)}
                  type="text"
                  id="jobdesc"
                  placeholder="Masukkan deskripsi pekerjaan anda"
                  class="input input-bordered w-full min-w-[100%] h-[100px]"
                />
              </div>
              <hr className="bg-[#eaeaea] h-[2px]" />
              <button className="btn btn-warning btn-outline btn-block text-white my-[20px]">
                Tambah Pengalaman Kerja
              </button>
              <hr className="bg-[#eaeaea] h-[2px]" />
            </form>
            <form onSubmit={addPortofolioEmployee} className="bg-white py-[30px] px-5 rounded-[8px] overflow-hidden">
              <h1 className="text-[22px] font-semibold">Portofolio</h1>
              <hr className="bg-[#C4C4C4] h-[2px] mx-[-25px] my-[30px]" />
              <div className="mb-[15px]">
                <label class="label" for="nameApp">
                  <span class="label-text text-[16px]">Nama aplikasi</span>
                </label>
                <input
                  onChange={(e) => setAppName(e.target.value)}
                  type="text"
                  id="nameApp"
                  placeholder="Masukkan nama aplikasi"
                  class="input input-bordered w-full min-w-[100%]"
                />
              </div>
              <div className="mb-[15px]">
                <label class="label" for="linkRepo">
                  <span class="label-text text-[16px]">Link repository</span>
                </label>
                <input
                onChange={(e) => setRepositoryLink(e.target.value)}
                  type="text"
                  id="linkRepo"
                  placeholder="Masukkan link repository"
                  class="input input-bordered w-full min-w-[100%]"
                />
              </div>
              <div className="mb-[15px] cursor-pointer">
                <span class="label-text text-[16px]">Upload gambar</span>
                <div className="w-full outline-dashed outline-2 outline-[#9EA0A5] rounded-[8px] mt-[5px] py-[50px] flex flex-col justify-start items-center text-[#1F2A36]">
                  <img alt="" src={require("../assets/images/drag.png")} />
                  <p className="my-[10px]">
                    Drag & Drop untuk Upload Gambar Aplikasi Mobile
                  </p>
                  <FileUploader handleChange={handleChange} name='file' types={fileTypes}/>
                  <span className="text-[14px] mb-[20px]">
                    Atau cari untuk mengupload file dari direktorimu.
                  </span>
                  {/* <div className="flex gap-3">
                    <div className="flex gap-2">
                      <img
                        alt=""
                        src={require("../assets/images/res-image.png")}
                      />
                      <p className="text-[14px]">
                        High-Res
                        <br />
                        Image PNG, JPG or GIF{" "}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <img alt="" src={require("../assets/images/size.png")} />
                      <p className="text-[14px]">
                        Size
                        <br />
                        1080x1920 or 600x800
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
              <hr className="bg-[#eaeaea] h-[2px]" />
              <button className="btn btn-warning btn-outline btn-block text-white my-[20px]">
                Tambah Portofolio
              </button>
              <hr className="bg-[#eaeaea] h-[2px]" />
            </form>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EditEmployee;
