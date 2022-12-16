import React from "react";
import logoPeworld from "../assets/logo/peworld.svg";

const ConfirmPassword = () => {
  return (
    <div className="py-[30px] px-[75px] h-screen w-full flex">
      <section className='w-[45%] bg-[url("../images/bg-auth.png")] bg-cover bg-no-repeat bg-center'>
        <div className="bg-[#5E50A1] w-full h-[100%] opacity-70 p-[40px]">
          <img alt="" src={logoPeworld} />
          <div className="w-full h-[100%] flex items-center">
            <h2 className="font-bold text-[44px] leading-[70px] text-white">
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </h2>
          </div>
        </div>
      </section>
      <section className="w-[55%] pl-[70px] pt-[3vw]">
        <div className="mb-[30px]">
          <h3 className="font-semibold text-[32px] text-[#1F2A36] mb-[10px]">Reset Password</h3>
          <p className="text-[#46505C] text-[18px]">You need to change your password to activate your account</p>
        </div>
        <div>
          <div className="mb-[15px]">
            <label class="label" for="password">
              <span class="label-text text-[#9EA0A5] ">Password</span>
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
              <span class="label-text text-[#9EA0A5] ">Confirmation new password</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Masukkan konfirmasi kata sandi"
              class="input input-bordered w-full min-w-[100%]"
            />
          </div>
          <button class="btn btn-block btn-warning text-white">Reset password</button>
        </div>
      </section>
    </div>
  );
};

export default ConfirmPassword;
