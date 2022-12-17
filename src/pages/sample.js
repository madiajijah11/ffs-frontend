import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Sample = () => {
  return (
    <div>
      <Navbar />
      <h1>Sample Page</h1>
      <div className="px-20 flex flex-col text-primary">
        <Link to="/home">home</Link>
        <Link to="/login-employee">LoginEmployee</Link>
        <Link to="/login-recruiter">LoginRecruiter</Link>
        <Link to="/register">register</Link>
        <Link to="/reset-password">ResetPassword</Link>
        <Link to="/confirm-password">confirmPassword</Link>
        <Link to="/job-experience">job experience</Link>
        <Link to="/HirePage">hire</Link>
        <Link to="/profil-reqruiter">ProfileReqruiter</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Sample;
