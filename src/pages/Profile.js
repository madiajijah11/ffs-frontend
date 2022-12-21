import axiosHelper from "../helpers/axios.helper.";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Skill from "../components/Skill";
import jwt_decode from "jwt-decode";

const ProfileRecruiter = () => {
  return (
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
  );
};

const ProfileEmployee = () => {
  const [profile, setProfile] = useState({});
  const token = useSelector((state) => state.auth.token);

  const fetchProfile = async () => {
    try {
      const response = await axiosHelper.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data.results);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      {/* Header / Navbar */}
      <div className="lg:flex lg:items-center lg:py-5 hidden lg:px-28">
        <div className="flex-1">
          <img
            className="w-32"
            src={require("../assets/images/logoUngu.png")}
            alt="logo"
          />
        </div>
        <div className="mr-14">
          <img src={require("../assets/images/bell.png")} alt="logo" />
        </div>
        <div className="mr-14">
          <img src={require("../assets/images/mail.png")} alt="logo" />
        </div>
        <div>
          <img
            className="w-12"
            src={require("../assets/images/profile.png")}
            alt="profile"
          />
        </div>
      </div>

      {/* Profile Portofolio */}
      <div className="flex bg-slate-100 gap-5 px-10 md-px-20 lg:px-28 py-10 font-sans flex-col lg:flex-row">
        {/* Left */}
        <div className="flex-[35%]">
          <div className="bg-white p-5 rounded-lg">
            <div className="flex justify-center items-center mb-5">
              <img
                src={require("../assets/images/profile.png")}
                alt="profile"
              />
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-2">
                {profile?.user?.fullName}
              </h3>
              <p className="font-bold mb-2">{profile?.user?.jobDesk}</p>
              <p className="mb-3">{profile?.user?.workTime}</p>
              <div className="flex items-center gap-3 mb-2">
                <img
                  className="inline"
                  src={require("../assets/images/map.png")}
                  alt="map"
                />
                <p>{profile?.user?.domicile}</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  className="inline"
                  src={require("../assets/images/phone.png")}
                  alt="map"
                />
                <p>{profile?.user?.phoneNumber}</p>
              </div>
              <p className="mb-4">{profile?.user?.description}</p>
            </div>
            <div className="mb-8">
              <button className="w-full h-12 bg-primary text-white text-lg font-bold border-2 border-primary rounded">
                Hire
              </button>
            </div>
            <h4 className="font-bold text-xl md:text-2xl mb-5">Skill</h4>
            <div className="flex flex-wrap gap-3 mb-10">
              {profile?.user?.skills?.map((skill, index) => {
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
              <p>{profile?.user?.email}</p>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <img
                className="inline"
                src={require("../assets/images/instagram.png")}
                alt="map"
              />
              <p>{profile?.user?.instagram}</p>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <img
                className="inline"
                src={require("../assets/images/github.png")}
                alt="map"
              />
              <p>{profile?.user?.github}</p>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <img
                className="inline"
                src={require("../assets/images/Vector.png")}
                alt="map"
              />
              <p>{profile?.user?.gitlab}</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-[65%]">
          <div className="bg-white rounded-lg p-5">
            <div className="flex items-center gap-10 mb-8">
              <div className="py-3 border-b-4 rounded border-primary">
                <h3 className="font-bold text-xl md:text-2xl cursor-pointer">
                  Portofolio
                </h3>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl cursor-pointer hover:font-bold">
                  Pengalaman kerja
                </h3>
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

const Profile = () => {
  const token = useSelector((state) => state.auth.token);
  const decode = jwt_decode(token);
  const { role } = decode;

  return <>{role === "1" ? <ProfileEmployee /> : <ProfileRecruiter />}</>;
};

export default Profile;
