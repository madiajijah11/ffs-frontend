import React from "react";
import { Link } from "react-router-dom";

const RegisterEmployee = () => {
  return (
    <div className="px-4 py-10 md:px-20 md:py-10 flex ">
      <div className="hidden md:block bg-sign bg-cover flex-[0.6]">
        <div className="bg-primary opacity-50 h-full w-full p-11">
          <div>
            <img
              className="h-10 w-10 mb-32"
              src={require("../assets/images/logo1.png")}
              alt="backgroundimage"
            />
          </div>
          <div className="text-[40px] font-bold">
            <div>Temukan developer</div>
            <div>berbakat & terbaik</div>
            <div>di berbagai bidang</div>
            <div>keahlian</div>
          </div>
        </div>
      </div>
      <div className="pt-0 pl-0 md:pt-28 md:pl-16 flex-1 md:flex-[0.5] w-full">
        <div>
          <form>
            <div className="md:hidden block">
              <img
                className="h-10 w-10 mb-32"
                src={require("../assets/images/logo1.png")}
                alt="backgroundimage"
              />
            </div>
            <div className="text-[32px] font-bold mb-4">Halo, Pewpeople</div>
            <p className="test-base mb-11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <div className="flex flex-col mb-8">
              <label className="mb-1" for="name">
                Nama
              </label>
              <input
                className="p-4"
                type="text"
                name="name"
                placeholder="Masukan nama panjang"
              ></input>
            </div>
            <div className="flex flex-col mb-8">
              <label className="mb-1" for="email">
                Email
              </label>
              <input
                className="p-4"
                type="email"
                name="email"
                placeholder="Masukan alamat email"
              ></input>
            </div>
            <div className="flex flex-col mb-8">
              <label className="mb-1" for="company">
                Perusahaan
              </label>
              <input
                className="p-4"
                type="text"
                name="company"
                placeholder="Masukan nama perusahaan"
              ></input>
            </div>
            <div className="flex flex-col mb-8">
              <label className="mb-1" for="fieldCompany">
                Bidang Perusahaan
              </label>
              <input
                className="p-4"
                type="text"
                name="fieldCompany"
                placeholder="Bidang perusahaan Anda"
              ></input>
            </div>
            <div className="flex flex-col mb-8">
              <label className="mb-1" for="phoneNumber">
                No handphone
              </label>
              <input
                className="p-4"
                type="text"
                name="phoneNumber"
                placeholder="Masukan no handphone"
              ></input>
            </div>
            <div className="flex flex-col mb-8">
              <label className="mb-1" for="password">
                Kata Sandi
              </label>
              <input
                className="p-4"
                type="password"
                name="password"
                placeholder="Masukan kata sandi"
              ></input>
            </div>
            <div className="flex flex-col mb-8">
              <label className="mb-1" for="confirmPassword">
                Konfirmasi kata sandi
              </label>
              <input
                className="p-4"
                type="password"
                name="confirmPassword"
                placeholder="Masukan konfirmasi kata sandi"
              ></input>
            </div>
            <div>
              <button className="btn w-full">Daftar</button>
            </div>
          </form>
        </div>
        <div className="mt-7 text-center">
          <span>Anda sudah punya akun? </span>
          <Link to="/">
            <span>Daftar Disini</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterEmployee;
