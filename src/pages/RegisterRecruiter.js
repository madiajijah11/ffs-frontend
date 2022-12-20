import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';

const RegisterRecruiter = () => {
  const [showAlertName, setShowAlertName] = React.useState(false)
  const [showAlertEmail, setShowAlertEmail] = React.useState(false)
  const [showAlertCompanyName, setShowAlertCompanyName] = React.useState(false)
  const [showAlertCompanyField, setShowAlertCompanyField] = React.useState(false)
  const [showAlertPhoneNumber, setShowAlertPhoneNumber] = React.useState(false)
  const [showAlertPassword, setShowAlertPassword] = React.useState(false)
  const [showAlertConfirmPassword, setShowAlertConfirmPassword] = React.useState(false)

  const register = async (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const companyName = event.target.companyName.value
    const companyField = event.target.companyField.value
    const phoneNumber = event.target.phoneNumber.value
    const password = event.target.password.value
    const confirmPassword = event.target.confirmPassword.value

    if (!name) {
      setShowAlertName(true)
    } else if (!email) {
      setShowAlertEmail(true)
    } else if (!companyName) {
      setShowAlertCompanyName(true)
    } else if (!companyField) {
      setShowAlertCompanyField(true)
    } else if (!phoneNumber) {
      setShowAlertPhoneNumber(true)
    } else if (!password) {
      setShowAlertPassword(true)
    } else if ( confirmPassword !== password) {
      setShowAlertConfirmPassword(true)
    } else {
      const {data} = await axios.post('http://localhost:8888/users', {
        fullName: name,
        email,
        phoneNumber,
        password,
        companyName,
        companyField,
        groupUser: 2
      })
      return data
    }
  }


  return (
    <div className="flex font-sans h-screen">
      <div className="flex-1 relative max-[600px]:hidden overflow-hidden">
        <img
          className="absolute w-32 top-[30px] left-[30px]"
          src={require("../assets/images/FFS-removebg.png")}
          alt="Logo"
        />
        <img
          className="absolute h-[100vh] w-[100%] z-[-1]"
          src={require("../assets/images/banner.png")}
          alt="Banner"
        />
        <div className="absolute z-[-1] bg-primary h-[100vh] w-[100%] opacity-80"></div>
        <div className="flex items-center justify-center h-[100vh]">
          <p className="text-white w-[450px] font-bold text-5xl leading-relaxed">
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col py-10 px-14 bg-[#E5E5E5] max-[600px]:p-5 overflow-y-scroll">
        <img className='w-32 top-[30px] left-[30px] mb-10 min-[600px]:hidden' src={require('../assets/images/logoUngu.png')} alt='Logo'/>
        <h1 className='font-bold text-2xl mb-2'>Halo, Pewpeople</h1>
        <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        <form onSubmit={register}>
          <div className='mb-5'>
            <label className='block mb-2'>Nama</label>
            <input onChange={() => setShowAlertName(false)} name='name' type='text' placeholder='Masukan nama panjang' className='border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]'></input>
            {showAlertName ? <p className='text-sm text-red-700'>Please fill in the name</p> : false}
          </div>
          <div className='mb-5'>
            <label className='block mb-2'>Email</label>
            <input onChange={() => setShowAlertEmail(false)} name='email' type='text' placeholder='Masukan alamat email' className='border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]'></input>
            {showAlertEmail ? <p className='text-sm text-red-700'>Please fill in the email</p> : false}
          </div>
          <div className='mb-5'>
            <label className='block mb-2'>Perusahaan</label>
            <input onChange={() => setShowAlertCompanyName(false)} name='companyName' type='text' placeholder='Masukan nama perusahaan' className='border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]'></input>
            {showAlertCompanyName ? <p className='text-sm text-red-700'>Please fill in the company name</p> : false}
          </div>
          <div className='mb-5'>
            <label className='block mb-2'>Bidang Perusahaan</label>
            <input onChange={() => setShowAlertCompanyField(false)} name='companyField' type='text' placeholder='Bidang perusahaan Anda' className='border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]'></input>
            {showAlertCompanyField ? <p className='text-sm text-red-700'>Please fill in the company field</p> : false}
          </div>
          <div className='mb-5'>
            <label className='block mb-2'>No Handphone</label>
            <input onChange={() => setShowAlertPhoneNumber(false)} name='phoneNumber' type='text' placeholder='Masukan no handphone' className='border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]'></input>
            {showAlertPhoneNumber ? <p className='text-sm text-red-700'>Please fill in the phone number</p> : false}
          </div>
          <div className='mb-5'>
            <label className='block mb-2'>Kata Sandi</label>
            <input onChange={() => setShowAlertPassword(false)} name='password' type='password' placeholder='Masukan kata sandi' className='border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]'></input>
            {showAlertPassword ? <p className='text-sm text-red-700'>Please fill in the password</p> : false}
          </div>
          <div className='mb-5'>
            <label className='block mb-2'>Konfirmasi kata Sandi</label>
            <input onChange={() => setShowAlertConfirmPassword(false)} name='confirmPassword' type='password' placeholder='Masukan konfirmasi kata sandi' className='border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]'></input>
            {showAlertConfirmPassword ? <p className='text-sm text-red-700'>Confirm password does not match password</p> : false}
          </div>
          <div className="mb-5">
            <button className="border-[1px] border-solid border-[#FBB017] bg-warning w-[100%] pl-3 h-[50px] rounded-[4px] text-white">
              Daftar
            </button>
          </div>
          <p className="text-center">
            Anda sudah punya akun?{" "}
            <Link
              to="/login-recruiter"
              className="text-warning hover:font-bold"
            >
              Masuk disini
            </Link>
          </p>
          <p className="text-center">
            Login sebagai Pekerja?{" "}
            <Link
              to="/login-employee"
              className="text-warning hover:font-bold"
            >
              Masuk disini
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterRecruiter;
