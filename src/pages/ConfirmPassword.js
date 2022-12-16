import React from "react";

const ConfirmPassword = () => {
  return (
    <div className="h-screen w-full flex">
      <section className="flex-1 relative max-[600px]:hidden">
        <img className='absolute w-[20%] top-[30px] left-[30px]' src={require('../assets/images/logoPutih.png')} alt='Logo'/>
        <img className='absolute h-[100vh] w-[100%] z-[-1]' src={require('../assets/images/banner.png')} alt='Banner' />
        <div className='absolute z-[-1] bg-[#5E50A1] h-[100vh] w-[100%] opacity-80'></div>
        <div className='flex items-center justify-center h-[100vh]'>
          <p className='text-white w-[450px] font-bold text-5xl leading-relaxed'>Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
        </div>
      </section>
      <section className="flex-1 pt-[3vw] px-14 bg-[#E5E5E5] flex flex-col">
        <div className="mb-[30px]">
          <h3 className="font-semibold text-[32px] text-[#1F2A36] mb-[10px]">
            Reset Password
          </h3>
          <p className="text-[#46505C] text-[18px]">
            You need to change your password to activate your account
          </p>
        </div>
        <div>
          <div className="mb-[15px]">
            <label class="label" for="password">
              <span class="label-text text-[16px]">Password</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Masukkan kata sandi"
              class="input input-bordered w-full min-w-[100%]"
            />
          </div>
          <div className="mb-[40px]">
            <label class="label" for="confirmPassword">
              <span class="label-text text-[16px]">
                Confirmation new password
              </span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Masukkan konfirmasi kata sandi"
              class="input input-bordered w-full min-w-[100%]"
            />
          </div>
          <button class="btn btn-block btn-warning text-white">
            Reset password
          </button>
        </div>
      </section>
    </div>
  );
};

export default ConfirmPassword;
