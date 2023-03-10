import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavUser from "../components/NavUser";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axiosHelper from "../helpers/axios.helper.";
import Skill from "../components/Skill";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employeeDetails, setEmployeeDetails] = useState([]);

  useEffect(() => {
    getEmployeeDetails();
    getPortofolio();
  }, []);

  const getEmployeeDetails = async () => {
    const result = await axiosHelper.get(`/users/profil/${id}`);
    setEmployeeDetails(result.data.results);
  };

  //fetching portofolio employee
  const [portofolio, setPortofolio] = useState([]);
  console.log(portofolio);
  const getPortofolio = async () => {
    const result = await axiosHelper.get(`/portfolioEmployee/${id}`);
    setPortofolio(result.data.results);
  };
  console.log(employeeDetails);
  return (
    <>
      {/* Header / Navbar */}
      <NavUser />

      {/* Profile Portofolio */}
      <div className="flex bg-[#EAEAEA] gap-5 md:px-[50px] px-3 pt-3 md:pt-[50px] pb-[20vh] font-sans flex-col lg:flex-row">
        {/* Left */}
        <div className="bg-white p-8 lg:w-1/3 w-full border rounded-md">
          <div className="flex justify-center items-center mb-5">
            {employeeDetails.picture ? (
              <img
                src={employeeDetails?.picture}
                alt="profile"
                className="w-32 rounded-full"
              />
            ) : (
              <img
                src={require("../assets/images/user.png")}
                alt="profile"
                className="w-32 rounded-full"
              />
            )}
          </div>
          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-2">
              {employeeDetails?.fullName}
            </h3>
            <p className="font-bold mb-2">{employeeDetails?.jobDesk}</p>
            <p className="mb-3">{employeeDetails?.workTime}</p>
            <div className="flex items-center gap-3 mb-2">
              <img
                className="inline"
                src={require("../assets/images/map.png")}
                alt="map"
              />
              <p>{employeeDetails?.domicile}</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <img
                className="inline"
                src={require("../assets/images/phone.png")}
                alt="map"
              />
              <p>{employeeDetails?.phoneNumber}</p>
            </div>
            <p className="mb-4">{employeeDetails?.description}</p>
          </div>
          <div className="mb-8">
            <button
              onClick={() => navigate(`/hire-page/${employeeDetails.id}`)}
              className="w-full h-12 bg-primary text-white text-lg font-bold border-2 border-primary rounded"
            >
              Hire
            </button>
          </div>
          <h4 className="font-bold text-xl md:text-2xl mb-5">Skill</h4>
          <div className="flex flex-wrap gap-3 mb-10">
            {employeeDetails?.skills?.map((skill, index) => {
              return (
                <div key={index}>
                  <Skill value={skill} />
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3 mb-5">
            <img
              className="inline"
              src={require("../assets/images/mail.png")}
              alt="map"
            />
            <p>{employeeDetails?.email}</p>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <img
              className="inline"
              src={require("../assets/images/instagram.png")}
              alt="map"
            />
            <p>{employeeDetails?.instagram}</p>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <img
              className="inline"
              src={require("../assets/images/github.png")}
              alt="map"
            />
            <p>{employeeDetails?.github}</p>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <img
              className="inline"
              src={require("../assets/images/Vector.png")}
              alt="map"
            />
            <p>{employeeDetails?.gitlab}</p>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white md:p-10 p-3 border rounded-md w-full">
          <div className="flex pt-[18px] gap-[30px] mb-10">
            <Link
              to={`/profile-portofolio/${id}`}
              className="font-semibold text-[22px] pb-3 border-primary border-b-4 hover:underline decoration-[#5E50A1] decoration-4"
            >
              Portofolio
            </Link>
            <Link
              to={`/job-experience/${id}`}
              className="font-semibold text-[22px] text-[#9EA0A5] pb-3  hover:underline decoration-[#0b0913] decoration-4"
            >
              Pengalaman Kerja
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {portofolio
              ? portofolio.map((data) => (
                  <div
                    key={String(data.id)}
                    className="flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold"
                  >
                    <img
                      src={data.appPicture}
                      className="w-[200px] h-[200px]"
                      alt="Remainder app"
                    />
                    <p>{data.appName}</p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-primary hidden md:block px-10 md:px-20 lg:px-28 py-10 font-sans">
        <div className="w-2/6 mb-16">
          <img
            className="mb-8 w-28"
            src={require("../assets/images/FFS-removebg.png")}
            alt="logo"
          />
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
        </div>
        <div>
          <hr />
          <div className="flex mt-5 gap-20">
            <p className="flex-1 text-white">
              2020 Pewworld. All right reserved
            </p>
            <p className="text-white">Telepon</p>
            <p className="text-white">Email</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 md:hidden">
        <div className="flex px-10 py-5 bg-white border-[1px] rounded-t-3xl">
          <div className="flex-1 flex justify-center items-center cursor-pointer">
            <img src={require("../assets/images/grid.png")} alt="grid" />
          </div>
          <div className="flex-1 flex justify-center items-center cursor-pointer">
            <img src={require("../assets/images/search.png")} alt="search" />
          </div>
          <div className="flex-1 flex justify-center items-center cursor-pointer">
            <img src={require("../assets/images/message.png")} alt="message" />
          </div>
          <div className="flex-1 flex justify-center items-center cursor-pointer">
            <img
              src={require("../assets/images/fotoProfileBawah.png")}
              alt="foto-profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
