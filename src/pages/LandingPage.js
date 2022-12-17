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
    <div className="flex flex-col items-center gap-20 bg-[#E5E5E5] px-5 py-10">
      <div className="text-lg sm:text-2xl lg:text-5xl font-semibold sm:text-start">
        Their opinion about FFS
      </div>
      <div className="carousel w-full gap-5 place-content-center">
        <div className="carousel-item flex items-center justify-center">
          <button href="#slide4" className="btn btn-circle">
            ❮
          </button>
        </div>
        <div className="carousel-item flex flex-col bg-white rounded-lg px-16 py-6 items-center justify-center gap-2 w-1/5">
          <div className="border-8 border-warning rounded-full">
            <img src={Review1} alt="Review1" />
          </div>
          <div className="text-3xl font-semibold">Harry Styles</div>
          <div className="text-lg text-center">Web Developer</div>
          <div className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </div>
        </div>
        <div className="carousel-item flex flex-col bg-white rounded-lg px-16 py-6 items-center justify-center gap-2 w-1/5">
          <div className="border-8 border-warning rounded-full">
            <img src={Review2} alt="Review2" />
          </div>
          <div className="text-3xl font-semibold">Niall Horan</div>
          <div className="text-lg text-center">Web Developer</div>
          <div className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </div>
        </div>
        <div className="carousel-item flex flex-col bg-white rounded-lg px-16 py-6 items-center justify-center gap-2 w-1/5">
          <div className="border-8 border-warning rounded-full">
            <img src={Review3} alt="Review3" />
          </div>
          <div className="text-3xl font-semibold">Louis Tomlinson</div>
          <div className="text-lg text-center">Web Developer</div>
          <div className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur{" "}
          </div>
        </div>
        <div className="carousel-item flex items-center justify-center">
          <button href="#slide4" className="btn btn-circle">
            ❯
          </button>
        </div>
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
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
