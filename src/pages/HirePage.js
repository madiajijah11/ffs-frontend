import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Attachment from "../assets/images/Attachment.png";
import Skill from "../components/Skill";
import { useLocation, useParams } from "react-router-dom";
import axiosHelper from "../helpers/axios.helper.";

const HirePage = () => {
  const { id } = useParams();
  const [employeeDetails, setEmployeeDetails] = useState([]);

  useEffect(() => {
    getEmployeeDetails();
  }, []);

  const getEmployeeDetails = async () => {
    const result = await axiosHelper.get(`/users/profil/${id}`);
    setEmployeeDetails(result.data.results);
  };
  return (
    <>
      <Navbar />
      <div className="px-2 sm:px-20 py-6 bg-[#E5E5E5]">
        <div className=" flex max-[768px]:flex-col">
          <div>
            {/* Card profile */}
            <div className="card bg-base-100 shadow-xl rounded-md w-full mb-10">
              <figure className="px-10 pt-10">
                <img
                  src={require("../assets/images/profile.png")}
                  alt="Banner"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{employeeDetails?.fullName}</h2>
                <p className="text-sm font-normal">
                  {employeeDetails?.jobDesk}
                </p>
                <p className="text-[#9EA0A5] text-sm">
                  {employeeDetails?.workTime}
                </p>
                <div className="flex gap-[13px] mt-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>{employeeDetails?.domicile}</div>
                </div>
                <div className="flex gap-[13px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>{employeeDetails?.phoneNumber}</div>
                </div>
                <p className="text-[#9EA0A5] mt-2">
                  {employeeDetails?.description}
                </p>
                <div className="card-actions flex justify-center mt-6">
                  <button className="grow btn btn-primary rounded-md">
                    Hire
                  </button>
                </div>
                <h2 className="card-title mt-9">Skill</h2>
                {/* Flex skill 1 */}
                <div className="flex gap-5 mt-5 flex-wrap">
                  {employeeDetails?.skills?.map((item, index) => (
                    <Skill value={item} />
                  ))}
                </div>
                {/* Flex skill 1 end */}
              </div>
            </div>
            {/* Card profile end */}
          </div>
          <div className="px-10 max-[768px]:px-0">
            <h1 className="font-semibold	text-2xl	leading-10	mb-6">
              Hubungi {employeeDetails?.fullName}
            </h1>
            <p className="leading-6	text-lg mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <form className="flex flex-col">
              <label className="text-xs	leading-4	mb-2.5">
                Tujuan tentang pesan ini
              </label>
              <select className="leading-5 text-sm rounded-md mb-6 p-2.5">
                <option>Project</option>
                <option></option>
              </select>
              <div className="relative w-full flex flex-col">
                <label className="text-xs	leading-4	mb-2.5">Pesan</label>
                <textarea
                  className="leading-5 text-sm t-0 r-0 rounded-md	h-[30vh] mb-12 p-2.5"
                  placeholder="Deskripsikan/jelaskan lebih detail"
                ></textarea>
                {/* ATTACHMENT */}
                <div className="absolute w-8 h-8 rounded-md bg-[#C4C4C4] p-2 top-[70%] left-[90%] max-[768px]:top-2/3 max-[768px]:left-[93%]">
                  <img src={Attachment} alt="Attachment" />
                </div>
                {/* ATTACHMENT END */}
              </div>
              <button className="btn btn-sm btn-warning text-white font-semibold">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HirePage;
