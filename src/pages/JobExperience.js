import React, { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import NavUser from "../components/NavUser";
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axiosHelper from "../helpers/axios.helper.";
import Skill from "../components/Skill";


const JobExperience = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employeeDetails, setEmployeeDetails] = useState([]);
  const imgURL = process.env.REACT_APP_IMG_URL;

  useEffect(() => {
    getEmployeeDetails();
  }, []);

  const getEmployeeDetails = async () => {
    const result = await axiosHelper.get(`/users/profil/${id}`);
    setEmployeeDetails(result.data.results);
  };
  // const [employee, setEmployee] = useState({});
  // const token = useSelector((state) => state.auth.token);

  // const navigate = useNavigate();

  // const imgURL = process.env.REACT_APP_IMG_URL;

  // const fetchProfile = async () => {
  //   try {
  //     const response = await axiosHelper.get("/profile/employee", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setEmployee(response.data.results);
  //   } catch (error) {
  //     if (error) throw error;
  //   }
  // };

  // console.log(employee);

  // useEffect(() => {
  //   fetchProfile();
  // }, []);
  return (
    <div>
      <NavUser></NavUser>
      <section className="bg-primary h-[40vh]"></section>
      <section className="bg-[#EAEAEA] px-[100px] pb-[20vh]">
        <div className="md:flex md:gap-x-3">
          <div className="sm:w-full bg-white mt-[-20vh] w-[30%] border rounded-md">
            <div className="flex items-center justify-center">
            {employeeDetails?.picture ? (
                <img src={imgURL + employeeDetails?.picture} alt="profile" />
              ) : (
                <img
                  src={require("../assets/images/profile.png")}
                  alt="profile"
                />
              )}
            </div>
            <div className="pl-[30px] pr-[30px]">
              <div className="mt-[13px] text-[22px] font-semibold">{employeeDetails?.fullName}</div>
              <div className="text-sm text-[#1F2A36]">{employeeDetails?.jobDesk}</div>
              <div className="text-sm text-[#9EA0A5]">{employeeDetails?.workTime}</div>
              <div className="flex mt-[15px] gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#9EA0A5]">
                  <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                </svg>
                <div className="text-[#9EA0A5] text-sm">{employeeDetails?.domicile}</div>
              </div>
              <div className="flex mt-[10px] gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#9EA0A5]">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                </svg>
                <div className="text-[#9EA0A5] text-sm">{employeeDetails?.phoneNumber}</div>
              </div>
              <div className="mt-2">{employeeDetails?.description}</div>
              <div className="flex mt-6">
                <button onClick={() => navigate(`/hire-page/${employeeDetails.id}`)} className="grow btn btn-primary rounded-md">Hire</button>
              </div>
              <div className="text-[22px] font-semibold mt-9">Skill</div>
              <div className="flex gap-[10px] mt-5">
                <button className="btn btn-sm btn-warning text-white btn-sm rounded-md">Python</button>
                <button className="btn btn-sm btn-warning text-white btn-sm rounded-md">Laravel</button>
                <button className="btn btn-sm btn-warning text-white btn-sm rounded-md">Golang</button>
              </div>
              <div className="flex gap-[10px] mt-5">
                <button className="btn btn-sm btn-warning text-white btn-sm rounded-md">JavaScript</button>
                <button className="btn btn-sm btn-warning text-white btn-sm rounded-md">PHP</button>
                <button className="btn btn-sm btn-warning text-white btn-sm rounded-md">HTML</button>
              </div>
              <div className="flex gap-[10px] mt-5">
                <button className="btn btn-sm btn-warning text-white btn-sm rounded-md">C++</button>
                <button className="btn btn-sm btn-warning text-white btn-sm rounded-md">Kotlin</button>
                <button className="btn btn-sm btn-warning text-white btn-sm rounded-md">Swift</button>
              </div>
              <div className="mt-[62px] pb-[82px]">
                <div className="flex gap-5 mt-7">
                  <img src={require('../assets/images/mail.png')} alt='Mail' />
                  <div>{employeeDetails?.email}</div>
                </div>
                <div className="flex gap-5 mt-7">
                  <img src={require('../assets/images/instagram.png')} alt='Mail' />
                  <div>{employeeDetails?.instagram}</div>
                </div>
                <div className="flex gap-5 mt-7">
                  <img src={require('../assets/images/github.png')} alt='Github' />
                  <div>{employeeDetails?.github}</div>
                </div>
                <div className="flex gap-5 mt-7">
                  <img src={require('../assets/images/Vector.png')} alt='Vector' />
                  <div>{employeeDetails?.gitlab}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Experience */}
          <div className="sm:mt-5 sm:w-full bg-white md:mt-[-20vh] md:w-[70%] border rounded-md">
            <div className="flex pl-[30px] pt-[18px] gap-[30px]">
              <div className="font-semibold text-[22px] text-[#9EA0A5] hover:underline decoration-[#5E50A1] decoration-4">Portofolio</div>
              <div className="font-semibold text-[22px] hover:underline decoration-[#5E50A1] decoration-4">Pengalaman Kerja</div>
            </div>
            {/* Experience 1 */}
            <div className="flex mt-[46px] pr-[77px]">
              <img src={require('../assets/images/suitcase.png')} className="px-9 h-[65px]" alt='Suitcase' />
              <div>
                <div className="text-xl font-semibold">Engineer</div>
                <div className="text-lg font-normal">Tokopedia</div>
                <div className="flex gap-3 text-base text-[#9EA0A5]">
                  <div>July 2019 - January 2020</div>
                  <div>6 months</div>
                </div>
                <div className="mt-4 text-[#1F2A36]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </div>
              </div>
            </div>
            {/* Experience 1 end */}
            <div className="divider"></div>
            {/* Experience 2 */}
            <div className="flex mt-[46px] pr-[77px]">
              <img src={require('../assets/images/suitcase.png')} className="px-9 h-[65px]" alt='Suitcase' />
              <div>
                <div className="text-xl font-semibold">Web Developer</div>
                <div className="text-lg font-normal">Tokopedia</div>
                <div className="flex gap-3 text-base text-[#9EA0A5]">
                  <div>July 2019 - January 2020</div>
                  <div>6 months</div>
                </div>
                <div className="mt-4 text-[#1F2A36]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </div>
              </div>
            </div>
            {/* Experience 2 end */}
          </div>
          {/* Card Experience end */}
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default JobExperience;