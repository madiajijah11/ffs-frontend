import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavUser from "../components/NavUser";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axiosHelper from "../helpers/axios.helper.";
import Skill from "../components/Skill";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();

  const imgURL = process.env.REACT_APP_IMG_URL;

  const fetchProfile = async () => {
    try {
      const response = await axiosHelper.get("/profile/employee", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEmployee(response.data.results);
    } catch (error) {
      if (error) throw error;
    }
  };

  console.log(employee);

  useEffect(() => {
    fetchProfile();
  }, []);
  // const { id } = useParams();
  // const navigate = useNavigate();

  // const [employeeDetails, setEmployeeDetails] = useState([]);
  // const imgURL = process.env.REACT_APP_IMG_URL;

  // useEffect(() => {
  //   getEmployeeDetails();
  // }, []);

  // const getEmployeeDetails = async () => {
  //   const result = await axiosHelper.get(`/users/profil/${id}`);
  //   setEmployeeDetails(result.data.results);
  // };

  return (
    <>
      {/* Header / Navbar */}
      <NavUser />

      {/* Profile Portofolio */}
      <div className="flex bg-slate-100 gap-5 px-10 md-px-20 lg:px-28 py-10 font-sans flex-col lg:flex-row">
        {/* Left */}
        <div className="flex-[35%]">
          <div className="bg-white p-5 rounded-lg">
            <div className="flex justify-center items-center mb-5">
              {employee.picture ? (
                <img src={employee.picture} alt="profile" />
              ) : (
                <img
                  src={require("../assets/images/profile.png")}
                  alt="profile"
                />
              )}
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-2">
                {employee?.fullName}
              </h3>
              <p className="font-bold mb-2">{employee?.jobDesk}</p>
              <p className="mb-3">{employee?.workTime}</p>
              <div className="flex items-center gap-3 mb-2">
                <img
                  className="inline"
                  src={require("../assets/images/map.png")}
                  alt="map"
                />
                <p>{employee?.domicile}</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  className="inline"
                  src={require("../assets/images/phone.png")}
                  alt="map"
                />
                <p>{employee?.phoneNumber}</p>
              </div>
              <p className="mb-4">{employee?.description}</p>
            </div>
            <div className="mb-8">
              <button
                onClick={() => navigate(`/hire-page/${employee.id}`)}
                className="w-full h-12 bg-primary text-white text-lg font-bold border-2 border-primary rounded"
              >
                Hire
              </button>
            </div>
            <h4 className="font-bold text-xl md:text-2xl mb-5">Skill</h4>
            <div className="flex flex-wrap gap-3 mb-10">
              {employee?.skills?.map((skill, index) => {
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
              <p>{employee?.email}</p>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <img
                className="inline"
                src={require("../assets/images/instagram.png")}
                alt="map"
              />
              <p>{employee?.instagram}</p>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <img
                className="inline"
                src={require("../assets/images/github.png")}
                alt="map"
              />
              <p>{employee?.github}</p>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <img
                className="inline"
                src={require("../assets/images/Vector.png")}
                alt="map"
              />
              <p>{employee?.gitlab}</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-[65%]">
          <div className="bg-white rounded-lg p-5">
            <div className="flex items-center gap-10 mb-8">
              <div className="py-3 border-b-4 rounded border-primary">
                 <Link><h3 className="font-bold text-xl md:text-2xl cursor-pointer">
                  Portofolio
                </h3></Link>
              </div>
              <div>
                <Link to="/job-experience"> <h3 className="text-xl md:text-2xl cursor-pointer hover:font-bold">
                  <button></button>Pengalaman kerja
                </h3></Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold">
                <img
                  src={require("../assets/images/portofolio1.png")}
                  alt="Remainder app"
                />
                <p>Remainder app</p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold">
                <img
                  src={require("../assets/images/portofolio2.png")}
                  alt="Social media app"
                />
                <p>Social media app</p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold">
                <img
                  src={require("../assets/images/portofolio3.png")}
                  alt="Project management app"
                />
                <p>Project management app</p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold">
                <img
                  src={require("../assets/images/portofolio4.png")}
                  alt="Remainder app"
                />
                <p>Remainder app</p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold">
                <img
                  src={require("../assets/images/portofolio5.png")}
                  alt="Social media app"
                />
                <p>Social media app</p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center cursor-pointer hover:font-bold">
                <img
                  src={require("../assets/images/portofolio6.png")}
                  alt="Project management app"
                />
                <p>Project management app</p>
              </div>
            </div>
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
