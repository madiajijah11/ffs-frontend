import React from "react";
import Footer from "../components/Footer";
import NavHome from "../components/NavHome";

const ProfileReqruiter = () => {
  return (
    <>
      <NavHome />
      <main className="bg-[#E5E5E5] px-[100px] py-[40px]">
        <div className="bg-primary h-[20vh] rounded-t-[8px]"></div>
        <div className="bg-white flex flex-col items-center justify-center rounded-b-[8px] pb-[20vh]">
          <div className="avatar mt-[-10vh] mb-[30px]">
            <div className="w-[120px] rounded-full">
              <img src="https://placeimg.com/192/192/company" alt="avatar" />
            </div>
          </div>
          <h1 className="text-[#1F2A36] text-[22px] font-semibold mb-[10px]">
            PT.Martabat Jaya Abadi
          </h1>
          <p className="text-[14px] text-[#1F2A36] mb-[10px]">Financial</p>
          <div className="flex items-center text-[#9EA0A5] text-[14px] mb-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="ml-[5px]">Purwokerto, Jawa Tengah</span>
          </div>
          <div className="desc text-center text-[#9EA0A5] w-[600px] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </div>
          <button className="btn btn-md btn-primary text-white w-[250px] mb-[30px]">
            Edit Profile
          </button>
          <div className="flex flex-col gap-3 text-[14px]">
            <div className="text-[#9EA0A5] flex items-center gap-3">
              <img alt="" src={require("../assets/images/mail.png")} />
              <p>company@gmail.com</p>
            </div>
            <div className="text-[#9EA0A5] flex items-center gap-3">
              <img alt="" src={require("../assets/images/instagram.png")} />
              <p>company.jaya</p>
            </div>
            <div className="text-[#9EA0A5] flex items-center gap-3">
              <img alt="" src={require("../assets/images/phone.png")} />
              <p>0821-3232-3233</p>
            </div>
            <div className="text-[#9EA0A5] flex items-center gap-3">
              <img alt="" src={require("../assets/images/linkedin.png")} />
              <p>Company Martabak Jaya</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProfileReqruiter;
