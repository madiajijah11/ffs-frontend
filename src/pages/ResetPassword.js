import React from 'react'

const ResetPassword = () => {
  return (
    <div className='px-4 py-10 md:px-20 md:py-10 flex '>
      <div className='hidden md:block bg-sign bg-cover flex-[0.6]'>
        <div className='bg-primary opacity-50 h-full w-full p-11'>
          <div>
            <img className='h-10 w-10 mb-32' src={require('../assets/images/logo1.png')} alt='backgroundimage'/>
          </div>
          <div className='text-[40px] font-bold'>
            <div>Temukan developer</div>
            <div>berbakat & terbaik</div>
            <div>di berbagai bidang</div>
            <div>keahlian</div>
          </div>
        </div>
      </div>
      <div className='pt-0 pl-0 md:pt-28 md:pl-16 flex-1 md:flex-[0.5] w-full'>
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
              <button className='btn w-full'>Send password reset email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword