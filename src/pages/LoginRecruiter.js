const LoginRecruiter = () => {
  return(
    <div className="flex font-sans">
      <div className="flex-1 relative max-[600px]:hidden">
        <img className='absolute w-32 top-[30px] left-[30px]' src={require('../assets/images/FFS-removebg.png')} alt='Logo'/>
        <img className='absolute h-[100vh] w-[100%] z-[-1]' src={require('../assets/images/banner.png')} alt='Banner' />
        <div className='absolute z-[-1] bg-primary h-[100vh] w-[100%] opacity-80'></div>
        <div className='flex items-center justify-center h-[100vh]'>
          <p className='text-white w-[450px] font-bold text-5xl leading-relaxed'>Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-14 bg-[#E5E5E5] max-[600px]:p-5">
        <img className='w-32 top-[30px] left-[30px] mb-10 min-[600px]:hidden' src={require('../assets/images/logoUngu.png')} alt='Logo'/>
        <h1 className='font-bold text-2xl mb-2'>Halo, Pewpeople</h1>
        <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        <form>
          <div className='mb-5'>
            <label className='block mb-2'>Email</label>
            <input name='email' type='text' placeholder='Masukan alamat email' className='border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]'></input>
          </div>
          <div className='mb-5'>
            <label className='block mb-2'>Kata Sandi</label>
            <input name='email' type='text' placeholder='Masukan kata sandi' className='border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]'></input>
          </div>
          <div className='text-end mb-5'>
            <button className='text-end cursor-pointer hover:text-[#5E50A1]'>Lupa kata sandi?</button>
          </div>
          <div className='mb-5'>
            <button className='border-[1px] border-solid border-[#FBB017] bg-warning w-[100%] pl-3 h-[50px] rounded-[4px] text-white'>Masuk</button>
          </div>
          <p className='text-center'>Anda belum punya akun? <button className='text-warning hover:font-bold'>Daftar disini</button></p>
        </form>
      </div>

    </div>
  )
}

export default LoginRecruiter