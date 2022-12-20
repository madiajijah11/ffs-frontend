
const ProfilePortofolio = () => {
  return(
    <>
      {/* Header / Navbar */}
      <div className='lg:flex lg:items-center lg:py-5 hidden lg:px-28'>
        <div className='flex-1'>
          <img className='w-32' src={require('../assets/images/logoUngu.png')} alt='logo' />
        </div>
        <div className='mr-14'>
          <img src={require('../assets/images/bell.png')} alt='logo' />
        </div>
        <div className='mr-14'>
          <img src={require('../assets/images/mail.png')} alt='logo' />
        </div>
        <div>
          <img className='w-12' src={require('../assets/images/profile.png')} alt='profile' />
        </div>
      </div>

      {/* Profile Portofolio */}
      <div className='flex bg-slate-100 gap-5 px-10 md-px-20 lg:px-28 py-10 font-sans flex-col lg:flex-row'>
        {/* Left */}
        <div className='flex-[35%]'>
          <div className='bg-white p-5 rounded-lg'>
            <div className='flex justify-center items-center mb-5'>
              <img src={require('../assets/images/profile.png')} alt='profile' />
            </div>
            <div>
              <h3 className='font-bold text-xl md:text-2xl mb-2'>Louis Tomlinson</h3>
              <p className='font-bold mb-2'>Web Developer</p>
              <p className='mb-3'>Freelancer</p>
              <div className='flex items-center gap-3 mb-2'>
                <img className='inline' src={require('../assets/images/map.png')} alt='map'/>
                <p>Purwokerto, Jawa Tengah</p>
              </div>
              <div className='flex items-center gap-3 mb-3'>
                <img className='inline' src={require('../assets/images/phone.png')} alt='map'/>
                <p>0812 - 3456 - 789</p>
              </div>
              <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
            </div>
            <div className='mb-8'>
              <button className='w-full h-12 bg-primary text-white text-lg font-bold border-2 border-primary rounded'>Hire</button>
            </div>
            <h4 className='font-bold text-xl md:text-2xl mb-5'>Skill</h4>
            <div className='flex flex-wrap gap-3 mb-10'>
              <div className='py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white'>Python</div>
              <div className='py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white'>Laravel</div>
              <div className='py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white'>Golang</div>
              <div className='py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white'>Javascript</div>
              <div className='py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white'>PHP</div>
              <div className='py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white'>HTML</div>
              <div className='py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white'>C++</div>
              <div className='py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white'>Kotlin</div>
              <div className='py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white'>Swift</div>
            </div>
            <div className='flex items-center gap-3 mb-5'>
              <img className='inline' src={require('../assets/images/mail.png')} alt='map'/>
              <p>Louistommo@gmail.com</p>
            </div>
            <div className='flex items-center gap-3 mb-5'>
              <img className='inline' src={require('../assets/images/instagram.png')} alt='map'/>
              <p>@Louist91</p>
            </div>
            <div className='flex items-center gap-3 mb-5'>
              <img className='inline' src={require('../assets/images/github.png')} alt='map'/>
              <p>@Louistommo</p>
            </div>
            <div className='flex items-center gap-3 mb-5'>
              <img className='inline' src={require('../assets/images/Vector.png')} alt='map'/>
              <p>@Louistommo91</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='flex-[65%]'>
          <div className='bg-white rounded-lg p-5'>
            <div className='flex items-center gap-10 mb-8'>
              <div className='py-3 border-b-4 rounded border-primary'>
                <h3 className='font-bold text-xl md:text-2xl cursor-pointer'>Portofolio</h3>
              </div>
              <div>
                <h3 className='text-xl md:text-2xl cursor-pointer hover:font-bold'>Pengalaman kerja</h3>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
              <div className='flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold'>
                <img src={require('../assets/images/portofolio1.png')} alt='Remainder app' />
                <p>Remainder app</p>
              </div>
              <div className='flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold'>
                <img src={require('../assets/images/portofolio2.png')} alt='Social media app' />
                <p>Social media app</p>
              </div>
              <div className='flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold'>
                <img src={require('../assets/images/portofolio3.png')} alt='Project management app' />
                <p>Project management app</p>
              </div>
              <div className='flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold'>
                <img src={require('../assets/images/portofolio4.png')} alt='Remainder app' />
                <p>Remainder app</p>
              </div>
              <div className='flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold'>
                <img src={require('../assets/images/portofolio5.png')} alt='Social media app' />
                <p>Social media app</p>
              </div>
              <div className='flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold'>
                <img src={require('../assets/images/portofolio6.png')} alt='Project management app' />
                <p>Project management app</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <div className='bg-primary hidden md:block px-10 md:px-20 lg:px-28 py-10 font-sans'>
        <div className='w-2/6 mb-16'>
          <img className='mb-8 w-28' src={require('../assets/images/FFS-removebg.png')} alt='logo'/>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        </div>
        <div>
          <hr />
          <div className='flex mt-5 gap-20'>
            <p className='flex-1 text-white'>2020 Pewworld. All right reserved</p>
            <p className='text-white'>Telepon</p>
            <p className='text-white'>Email</p>
          </div>
        </div>
      </div>

      <div className='bg-slate-100 md:hidden'>
        <div className='flex px-10 py-5 bg-white border-[1px] rounded-t-3xl'>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img src={require('../assets/images/grid.png')} alt='grid'/>
          </div>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img src={require('../assets/images/search.png')} alt='search' />
          </div>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img src={require('../assets/images/message.png')} alt='message' />
          </div>
          <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <img src={require('../assets/images/fotoProfileBawah.png')} alt='foto-profile' />
          </div>
        </div>
      </div>

    </>
  )
}

export default ProfilePortofolio