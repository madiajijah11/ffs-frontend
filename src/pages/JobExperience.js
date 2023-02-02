import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavUser from "../components/NavUser";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axiosHelper from "../helpers/axios.helper.";
import user from "../assets/images/user.png";
import moment from "moment/moment";

const JobExperience = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //fetching profile employee
  const [employeeDetails, setEmployeeDetails] = useState([]);

  useEffect(() => {
    getEmployeeDetails();
    getJobExperience();
  }, []);

  const getEmployeeDetails = async () => {
    const result = await axiosHelper.get(`/users/profil/${id}`);
    setEmployeeDetails(result.data.results);
  };

  const skillUser = employeeDetails.skills;

  //fetching job experience
  const [job, setJob] = useState([]);

  const getJobExperience = async () => {
    const result = await axiosHelper.get(`/workExperience/${id}`);
    setJob(result.data.results);
  };

  return (
    <div>
      <NavUser></NavUser>
      {/* <section className="bg-primary h-[40vh]"></section> */}
      <section className="bg-[#EAEAEA] pt-3 md:pt-[50px] md:px-[50px] px-3 pb-[20vh]">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="bg-white p-8 lg:w-1/3 w-full border rounded-md">
            <div className="flex items-center justify-center">
              {employeeDetails?.picture ? (
                <img
                  src={employeeDetails?.picture}
                  alt="profile"
                  className="w-32 rounded-full"
                />
              ) : (
                <img src={user} alt="profile" className="w-32 rounded-full" />
              )}
            </div>
            <div className="">
              <div className="mt-[13px] text-[22px] font-semibold">
                {employeeDetails?.fullName}
              </div>
              <div className="text-sm text-[#1F2A36]">
                {employeeDetails?.jobDesk}
              </div>
              <div className="text-sm text-[#9EA0A5]">
                {employeeDetails?.workTime}
              </div>
              <div className="flex mt-[15px] gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-[#9EA0A5]"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-[#9EA0A5] text-sm">
                  {employeeDetails?.domicile}
                </div>
              </div>
              <div className="flex mt-[10px] gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-[#9EA0A5]"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-[#9EA0A5] text-sm">
                  {employeeDetails?.phoneNumber}
                </div>
              </div>
              <div className="mt-2">{employeeDetails?.description}</div>
              <div className="flex mt-6">
                <button
                  onClick={() => navigate(`/hire-page/${employeeDetails.id}`)}
                  className="grow btn btn-primary rounded-md"
                >
                  Hire
                </button>
              </div>
              <div className="text-[22px] font-semibold mt-9">Skill</div>
              <div className="flex flex-wrap gap-[10px] mt-5">
                {skillUser
                  ? skillUser.map((e) => (
                      <div className="btn  btn-warning text-white btn-sm rounded-md">
                        {e}
                      </div>
                    ))
                  : null}
              </div>
              <div className="mt-[62px] pb-[82px]">
                <div className="flex gap-5 mt-7">
                  <img src={require("../assets/images/mail.png")} alt="Mail" />
                  <div>{employeeDetails?.email}</div>
                </div>
                <div className="flex gap-5 mt-7">
                  <img
                    src={require("../assets/images/instagram.png")}
                    alt="Mail"
                  />
                  <div>{employeeDetails?.instagram}</div>
                </div>
                <div className="flex gap-5 mt-7">
                  <img
                    src={require("../assets/images/github.png")}
                    alt="Github"
                  />
                  <div>{employeeDetails?.github}</div>
                </div>
                <div className="flex gap-5 mt-7">
                  <img
                    src={require("../assets/images/Vector.png")}
                    alt="Vector"
                  />
                  <div>{employeeDetails?.gitlab}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Experience */}
          <div className="bg-white md:p-10 p-3 border rounded-md w-full">
            <div className="flex pt-[18px] gap-[30px]">
              <Link
                to={`/profile-portofolio/${id}`}
                className="font-semibold text-[22px] pb-3 text-[#9EA0A5] hover:underline decoration-[#5E50A1] decoration-4"
              >
                Portofolio
              </Link>
              <Link
                to={`/job-experience/${id}`}
                className="font-semibold text-[22px] pb-3 border-primary border-b-4 hover:underline decoration-[#0b0913] decoration-4"
              >
                Pengalaman Kerja
              </Link>
            </div>
            {job
              ? job.map((userJob) => (
                  <>
                    <div className="flex mt-[46px]">
                      <img
                        src={require("../assets/images/suitcase.png")}
                        className="px-9 h-[65px]"
                        alt="Suitcase"
                      />
                      <div>
                        <div className="text-xl font-semibold">
                          {userJob.position}
                        </div>
                        <div className="text-lg font-normal">
                          {userJob.company}
                        </div>
                        <div className="flex gap-3 text-base text-[#9EA0A5]">
                          <div>
                            {moment(userJob.joinDate).format("LL")} -{" "}
                            {moment(userJob.endDate).format("LL")}
                          </div>
                          {/* <div>6 months</div> */}
                        </div>
                        <div className="mt-4 text-[#1F2A36]">
                          {userJob.jobDescription}
                        </div>
                      </div>
                    </div>
                    <div className="divider"></div>
                  </>
                ))
              : null}
            {/* <div className="flex mt-[46px]">
              <img
                src={require("../assets/images/suitcase.png")}
                className="px-9 h-[65px]"
                alt="Suitcase"
              />
              <div>
                <div className="text-xl font-semibold">Web Developer</div>
                <div className="text-lg font-normal">Tokopedia</div>
                <div className="flex gap-3 text-base text-[#9EA0A5]">
                  <div>July 2019 - January 2020</div>
                  <div>6 months</div>
                </div>
                <div className="mt-4 text-[#1F2A36]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default JobExperience;
