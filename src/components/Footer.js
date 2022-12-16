import { Link } from "react-router-dom";
import Logo from "../assets/images/FFS-removebg.png";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col px-2 sm:px-20 py-6 gap-3">
        <hr className="border-b-2 border-primary w-full" />
        <div>
          <img src={Logo} alt="logo" className="w-20" />
          <div className=" sm:w-80 text-lg text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </div>
        </div>
        <hr className="border-b-2 border-primary w-full" />
        <div className="flex flex-row justify-between">
          <div className="text-lg">&copy;2020 FFS. All Rights Reserved</div>
          <div className="grid grid-cols-2 gap-5">
            <Link to="#" className="text-lg">
              Telepon
            </Link>
            <Link to="#" className="text-lg">
              Email
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
