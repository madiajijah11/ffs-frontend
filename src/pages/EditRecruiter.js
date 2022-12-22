import React from 'react'
import Footer from "../components/Footer";
import NavUser from "../components/NavUser";
import { useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditRecruiter = () => {
  const token = useSelector((state) => state.auth.token)
  const decoded = jwt_decode(token)
  const userId = decoded.id
  const navigate = useNavigate()

  // Get recruiter data
  const [recruiter, setRecruiter] = React.useState({})

  React.useEffect(()=> {
    getRecruiter()
  }, [])
  const getRecruiter = async () => {
    const {data} = await axios.get(`http://localhost:8888/users/profil/${userId}`)
    setRecruiter(data.results)
    return data
  }

  // Update
  const [companyName, setCompanyName] = React.useState('')
  const [companyField, setCompanyField] = React.useState('')
  const [domicile, setDomicile] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [instagram, setInstagram] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [linkedin, setLinkedin] = React.useState('')
  const [email, setEmail] = React.useState('')

  const updateCompany = async () => {
    const {dataUser} = await axios.patch(`http://localhost:8888/users/${userId}`, {
      companyName,
      companyField,
      phoneNumber,
      email
    })
    const {dataCompany} = await axios.patch(`http://localhost:8888/profileCompany/1`, {
      domicile,
      description,
      instagram,
      linkedIn: linkedin
    })
    const data = {dataUser, dataCompany}
    getRecruiter()
    return data
  }

  return (
    <div>
      <NavUser></NavUser>
      <div className='h-max'>
        <div className='bg-[#E5E5E5] md:bg-primary h-[400px] md:px-[150px] px-4 md:py-[200px] py-16'>
          <div className='flex-col md:flex-row flex gap-7'>
            <div className='flex-[0.3] '>
              <div className='bg-white rounded-[8px] px-[30px] py-[20px] mb-5'>
                <div className='flex flex-col items-center'>
                  <div className='mb-3'>
                    <img alt="" src={require("../assets/images/profile.png")}></img>
                  </div>
                  <div className='flex gap-2 items-center mb-12'>
                    <img className='h-4 w-4' alt="" src={require("../assets/images/pen-edit.png")} />
                    <div className="text-[#9EA0A5] ">Edit</div>
                  </div>
                </div>
                <div className="text-[#1F2A36] text-[22px] font-semibold mb-[10px]">{recruiter.companyName}</div>
                <div className="text-[#1F2A36] text-[14px] font-normal mb-[10px]">{recruiter.companyField}</div>
                <div className='flex gap-2.5 items-center mb-[10px]'>
                  <img className='h-4 w-4' alt="" src={require("../assets/images/map.png")} />
                  <div className='text-[14px] font-normal'>{recruiter.domicile}</div>
                </div>
                <div className="hidden md:block text-[14px] font-normal mb-[10px]">{recruiter.description}</div>
              </div>
              <button onClick={updateCompany} className='btn btn-primary w-full mb-4'>Simpan</button>
              <button onClick={()=> navigate('/profile')} className='btn btn-primary w-full btn-outline'>Kembali</button>
            </div>
            <div className='flex-[0.7] '>
              <div className='bg-white rounded-[8px]  mb-5'>
                <div className='px-[30px] py-[20px] text-[22px] font-semibold'>Data diri</div>
                <hr></hr>
                <div className='px-[30px] py-[20px]'>
                  <form>
                  <div className='flex flex-col'>
                    <label className='label' for='companyName'>Nama Perusahaan</label>
                    <input onChange={(e)=> setCompanyName(e.target.value)} className='input input-bordered' type='text' name='companyName' placeholder='Masukan nama perusahan'></input>
                  </div>
                  <div className='flex flex-col'>
                    <label className='label' for='companyField'>Bidang</label>
                    <input onChange={(e)=> setCompanyField(e.target.value)} className='input input-bordered' type='text' name='companyField' placeholder='Masukan bidang perusahaan ex : Financial'></input>
                  </div>
                  <div className='flex flex-col'>
                    <label className='label' for='domicile'>Domisili</label>
                    <input onChange={(e)=> setDomicile(e.target.value)} className='input input-bordered' type='text' name='domicile' placeholder='Masukan Domisili'></input>
                  </div>
                  <div className='flex flex-col'>
                    <label className='label' for='description'>Deskripsi singkat</label>
                    <input onChange={(e)=> setDescription(e.target.value)} className='textarea h-[144px] textarea-bordered' type='textarea' name='description' placeholder='Tuliskan deskripsi singkat'></input>
                  </div>
                  {/* <div className='flex flex-col'>
                    <label className='label' for='email'>Email</label>
                    <input className='input input-bordered' type='text' name='email' placeholder='Masukan email'></input>
                  </div> */}
                  <div className='flex flex-col'>
                    <label className='label' for='instagram'>Instagram</label>
                    <input onChange={(e)=> setInstagram(e.target.value)} className='input input-bordered' type='text' name='email' placeholder='Masukan Username IG'></input>
                  </div>
                  <div className='flex flex-col'>
                    <label className='label' for='phoneNumber'>Nomor Telepon</label>
                    <input onChange={(e)=> setPhoneNumber(e.target.value)} className='input input-bordered' type='text' name='phoneNumber' placeholder='Masukan nomor telepon'></input>
                  </div>
                  <div className='flex flex-col'>
                    <label className='label' for='linkedIn'>Linkedin</label>
                    <input onChange={(e)=> setLinkedin(e.target.value)} className='input input-bordered' type='text' name='linkedIn' placeholder='Masukan nama Linkedin'></input>
                  </div>
                  <div className='flex flex-col'>
                    <label className='label' for='email'>Email</label>
                    <input onChange={(e)=> setEmail(e.target.value)} className='input input-bordered' type='text' name='email' placeholder='Masukan email'></input>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[#E5E5E5] md:h-[1000px] h-[1250px]'></div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default EditRecruiter