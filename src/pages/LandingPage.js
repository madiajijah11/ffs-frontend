import { Icon } from "@iconify/react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import LandingPage1 from "../assets/images/LandingPage-1.png";
import LandingPage2 from "../assets/images/LandingPage-2.png";
import LandingPage3 from "../assets/images/LandingPage-3.png";
import Review1 from "../assets/images/Ellipse320.png";
import Review2 from "../assets/images/Ellipse321.png";
import Review3 from "../assets/images/Ellipse322.png";

const FirstSection = () => {
  return (
    <div className="grid sm:grid-cols-2">
      <div className="inline-flex flex-col items-start justify-center gap-6">
        <div className="text-lg sm:text-2xl lg:text-5xl font-semibold text-justify sm:text-start">
          Talenta terbaik negeri untuk perubahan revolusi 4.0
        </div>
        <div className="text-lg text-justify sm:text-start leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </div>
        <button className="btn btn-primary rounded-md">
          Mulai Dari Sekarang
        </button>
      </div>
      <div className="inline-flex items-center justify-center">
        <figure>
          <img src={LandingPage1} alt="LandingPage1" />
        </figure>
      </div>
    </div>
  );
};

const SecondSection = () => {
  return (
    <div className="grid sm:grid-cols-2">
      <div className="inline-flex items-center justify-center">
        <figure>
          <img src={LandingPage2} alt="LandingPage2" />
        </figure>
      </div>
      <div className="inline-flex flex-col items-start justify-center gap-6">
        <div className="text-lg sm:text-2xl lg:text-5xl font-semibold text-justify sm:text-start">
          Kenapa harus mencari tallent di FFS
        </div>
        <div className="text-lg text-justify sm:text-start leading-loose">
          <ul>
            <li className="flex flex-row items-center gap-3">
              <Icon
                icon="material-symbols:check-circle-rounded"
                className="w-6 h-6"
              />
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flex flex-row items-center gap-3">
              <Icon
                icon="material-symbols:check-circle-rounded"
                className="w-6 h-6"
              />
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flex flex-row items-center gap-3">
              <Icon
                icon="material-symbols:check-circle-rounded"
                className="w-6 h-6"
              />
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flex flex-row items-center gap-3">
              <Icon
                icon="material-symbols:check-circle-rounded"
                className="w-6 h-6"
              />
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <div className="grid sm:grid-cols-2">
      <div className="inline-flex flex-col items-start justify-center gap-6">
        <div className="text-lg sm:text-2xl lg:text-5xl font-semibold text-justify sm:text-start">
          Skill Tallent
        </div>
        <div className="text-lg text-justify sm:text-start leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </div>
        <div className="grid grid-cols-2">
          <div className="text-lg text-justify sm:text-start leading-loose">
            <ul>
              <li className="flex flex-row items-center gap-3">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  className="w-6 h-6 flex-shrink-0"
                />
                Java
              </li>
              <li className="flex flex-row items-center gap-3">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  className="w-6 h-6 flex-shrink-0"
                />
                Kotlin
              </li>
              <li className="flex flex-row items-center gap-3">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  className="w-6 h-6 flex-shrink-0"
                />
                PHP
              </li>
              <li className="flex flex-row items-center gap-3">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  className="w-6 h-6 flex-shrink-0"
                />
                JavaScript
              </li>
            </ul>
          </div>
          <div className="text-lg text-justify sm:text-start leading-loose">
            <ul>
              <li className="flex flex-row items-center gap-3">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  className="w-6 h-6 flex-shrink-0"
                />
                Golang
              </li>
              <li className="flex flex-row items-center gap-3">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  className="w-6 h-6 flex-shrink-0"
                />
                C++
              </li>
              <li className="flex flex-row items-center gap-3">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  className="w-6 h-6 flex-shrink-0"
                />
                Ruby
              </li>
              <li className="flex flex-row items-center gap-3">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  className="w-6 h-6 flex-shrink-0"
                />
                10+ Bahasa lainnya
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-center">
        <figure>
          <img src={LandingPage3} alt="LandingPage3" />
        </figure>
      </div>
    </div>
  );
};

const FourthSection = () => {
  return (
    <div className="flex flex-col items-center gap-10 bg-[#E5E5E5] sm:px-5 py-10 rounded-lg">
      <div className="text-lg sm:text-2xl lg:text-5xl font-semibold sm:text-start">
        Their opinion about FFS
      </div>
      <div className="flex flex-col sm:flex-row w-3/4 gap-5 overflow-y-auto sm:overflow-x-auto">
        
        <div className="grid grid-flow-row sm:grid-flow-col gap-5">
          <div className="flex flex-col bg-white rounded-lg sm:px-16 py-6 items-center gap-2 ">
            <div className="border-8 border-warning rounded-full">
              <img src={Review1} alt="Review1" />
            </div>
            <div className="text-3xl font-semibold text-center">
              Harry Styles
            </div>
            <div className="text-lg text-center">Web Developer</div>
            <div className="text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-lg sm:px-16 py-6 items-center gap-2 ">
            <div className="border-8 border-warning rounded-full">
              <img src={Review2} alt="Review2" />
            </div>
            <div className="text-3xl font-semibold text-center">
              Niall Horan
            </div>
            <div className="text-lg text-center">Web Developer</div>
            <div className="text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-lg sm:px-16 py-6 items-center gap-2 ">
            <div className="border-8 border-warning rounded-full">
              <img src={Review3} alt="Review3" />
            </div>
            <div className="text-3xl font-semibold text-center">
              Louis Tomlinson
            </div>
            <div className="text-lg text-center">Web Developer</div>
            <div className="text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FifthSection = () => {
  return (
    <div className="py-20">
      <div className="px-20 py-16 bg-primary flex flex-col sm:flex-row justify-between items-center rounded-tl-[70px] rounded-br-[70px] rounded-bl-xl rounded-tr-xl">
        <div>
          <div className="text-white font-semibold text-4xl">Lorem ipsum</div>
          <div className="text-white font-semibold text-4xl">
            dolor sit amet
          </div>
        </div>
        <button className="btn btn-outline btn-active">
          Mulai Dari Sekarang
        </button>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-3 sm:px-20 py-6 grid grid-flow-row gap-5">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
