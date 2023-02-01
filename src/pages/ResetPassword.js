import React from 'react'
import axiosHelper from '../helpers/axios.helper.'
import { Oval } from  'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
  const navigate = useNavigate()

  // Reset password
  const [loading, setLoading] = React.useState(null)
  const [successMessage, setSuccessMessage] = React.useState(null)
  const [errorMessage, setErrorMessage] = React.useState(null)
  const resetPassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMessage(false)
    setErrorMessage(false)
    const email = e.target.email.value
    try {
      const response = await axiosHelper.post('/auth/forgotPassword', {email})
      console.log(response)
      setLoading(false)
      setSuccessMessage(response?.data?.message)
      setTimeout(() => {
        navigate('/confirm-password')
      }, 3000)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setErrorMessage(error?.response?.data?.message)
    }
  }

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
          <form onSubmit={resetPassword}>
            <div className='md:hidden block'>
              <img className='h-10 w-10 mb-32' src={require('../assets/images/logo1.png')} alt='backgroundimage'/>
            </div>
            <div className='text-[32px] font-bold mb-4'>Reset password</div>
            <p className='test-base mb-10'>Enter your user account's verified email address and we will send you a password reset link.</p>
            {loading && <div className='mb-10 flex justify-center'>
              <Oval
                height={25}
                width={25}
                color="#5E50A1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#B6A7FA"
                strokeWidth={5}
                strokeWidthSecondary={5}
              />
            </div>}
            {successMessage && <div class="alert alert-success shadow-lg mb-10">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{successMessage} Check your email.</span>
              </div>
            </div>}
            {errorMessage && <div class="alert alert-error shadow-lg mb-10">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{errorMessage}</span>
              </div>
            </div>}
            <div className='flex flex-col mb-8'>
              <label className='mb-1' for='email'>Email</label>
              <input className='p-4' type='email' name='email' placeholder='Masukan alamat email'></input>
            </div>
            <div>
              <button type='submit' className='btn btn-warning text-white w-full'>Send password reset email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword