import React from 'react'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div className='h-screen w-full flex'>
      <section className="flex-1 relative max-[600px]:hidden">
        <img className='absolute w-[20%] top-[30px] left-[30px]' src={require('../assets/images/logoPutih.png')} alt='Logo'/>
        <img className='absolute h-[100vh] w-[100%] z-[-1]' src={require('../assets/images/banner.png')} alt='Banner' />
        <div className='absolute z-[-1] bg-[#5E50A1] h-[100vh] w-[100%] opacity-70'></div>
        <div className='flex items-center justify-center h-[100vh]'>
          <p className='text-white w-[450px] font-bold text-5xl leading-relaxed'>Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
        </div>
      </section>
      <div className='flex-1 pt-[3vw] px-14 bg-[#E5E5E5] flex flex-col'>
        <div>
          <form>
            <div className='md:hidden block'>
              <img className='h-10 w-10 mb-32' src={require('../assets/images/logo1.png')} alt='backgroundimage'/>
            </div>
            <div className='text-[32px] font-bold mb-4'>Reset password</div>
            <p className='test-base mb-11'>Enter your user account's verified email address and we will send you a password reset link.</p>
            <div className='flex flex-col mb-8'>
              <label className='mb-1' for='email'>Email</label>
              <input className='p-4' type='email' name='email' placeholder='Masukan alamat email'></input>
            </div>
            <div>
              <Link to="/confirm-password"><button className='btn btn-warning text-white w-full'>Send password reset email</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword