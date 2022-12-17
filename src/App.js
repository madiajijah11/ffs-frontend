import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import Sample from "./pages/Sample";
import LoginEmployee from "./pages/LoginEmployee";
import LoginRecruiter from "./pages/LoginRecruiter";
import RegisterRecruiter from "./pages/RegisterRecruiter";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import ConfirmPassword from "./pages/ConfirmPassword";
import JobExperience from "./pages/JobExperience";
import HirePage from "./pages/HirePage"
import Home from "./pages/Home";
import ProfileReqruiter from "./pages/ProfileReqruiter";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<Sample />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login-employee" element={<LoginEmployee />} />
      <Route path="/login-recruiter" element={<LoginRecruiter />} />
      <Route path="/register-recruiter" element={<RegisterRecruiter />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/job-experience" element={<JobExperience />} />
      <Route path="/hirePage" element={<HirePage />} />
      <Route path="/profil-reqruiter" element={<ProfileReqruiter />} />
    </Routes>
  );
}

export default App;
