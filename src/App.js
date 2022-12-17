import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import Sample from "./pages/Sample";
import LoginEmployee from "./pages/LoginEmployee";
import LoginRecruiter from "./pages/LoginRecruiter";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import ConfirmPassword from "./pages/ConfirmPassword";
import JobExperience from "./pages/JobExperience";
import Home from "./pages/Home";


function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<Sample />} />
      <Route index path="/login-employee" element={<LoginEmployee />} />
      <Route index path="/login-recruiter" element={<LoginRecruiter />} />
      <Route index path="/register" element={<Register />} />
      <Route index path="/reset-password" element={<ResetPassword />} />
      <Route index path="/confirm-password" element={<ConfirmPassword />} />
      <Route index path="/job-experience" element={<JobExperience />} />
      <Route index path="/home" element={<Home />} />

    </Routes>
  );
}

export default App;
