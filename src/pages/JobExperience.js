import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const JobExperience = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="flex flex-col relative">
          <div className="bg-primary h-96"></div>
          <div className="absolute left-[10%] top-[70px]">
            <div className="flex">
              <div>
                {/* Card profile */}
                <div className="card w-96 bg-base-100 shadow-xl rounded-md">
                  <figure className="px-10 pt-10">
                    <img src={require('../assets/images/profile.png')} alt='Banner' />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Louis Tomlison</h2>
                    <p className="text-sm font-normal">Web Developer</p>
                    <p className="text-[#9EA0A5] text-sm">Freelancer</p>
                    <div className="flex gap-[13px] mt-[15px]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                      </svg>
                      <div>Purwokerto, Jawa Tengah</div>
                    </div>
                    <div className="flex gap-[13px]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                      </svg>
                      <div>0812 - 3456 - 789</div>
                    </div>
                    <p className="text-[#9EA0A5] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                    <div className="card-actions flex justify-center mt-6">
                      <button className="grow btn btn-primary rounded-md">Hire</button>
                    </div>
                    <h2 className="card-title mt-9">Skill</h2>
                    {/* Flex skill 1 */}
                    <div className="flex gap-5 mt-5">
                      <button className="btn btn-sm btn-warning text-white">Python</button>
                      <button className="btn btn-sm btn-warning text-white">Laravel</button>
                      <button className="btn btn-sm btn-warning text-white">Golang</button>
                    </div>
                    {/* Flex skill 1 end */}

                    {/* Flex skill 2 */}
                    <div className="flex gap-5">
                      <button className="btn btn-sm btn-warning text-white">JavaScript</button>
                      <button className="btn btn-sm btn-warning text-white">PHP</button>
                      <button className="btn btn-sm btn-warning text-white">HTML</button>
                    </div>
                    {/* Flex skill 2 end */}

                    {/* Flex skill 3 */}
                    <div className="flex gap-5">
                      <button className="btn btn-sm btn-warning text-white">C++</button>
                      <button className="shrink btn btn-sm btn-warning text-white">Kotlin</button>
                      <button className="btn btn-sm btn-warning text-white">Swift</button>
                    </div>
                    {/* Flex skill 3 end */}

                    <div className="border-2 border-black mt-[62px]">
                    <div className="flex gap-5">
                      <div>
                      <img src={require('../assets/images/mail.png')} alt='Mail' />
                      </div>
                      <div>Louistommo@gmail.com</div>
                    </div>

                    <div className="flex gap-5">
                      <div>
                      <img src={require('../assets/images/instagram.png')} alt='Instagram' />
                      </div>
                      <div>@Louist91</div>
                    </div>

                    <div className="flex gap-5">
                      <div>
                      <img src={require('../assets/images/github.png')} alt='Github' />
                      </div>
                      <div>@Louistommo</div>
                    </div>

                    <div className="flex gap-5">
                      <div>
                      <img src={require('../assets/images/Vector.png')} alt='Vector' />
                      </div>
                      <div>@Louistommo91</div>
                    </div>
                    </div>
                  </div>
                </div>
                {/* Card profile end */}
              </div>
              <div>Ini flex 2</div>
            </div>
          </div>
          <div className="h-screen"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default JobExperience;