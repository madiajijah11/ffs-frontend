import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import Sample from "./pages/Sample";
import LoginRecruiter from "./pages/LoginRecruiter";
import ConfirmPassword from "./pages/ConfirmPassword";
import JobExperience from "./pages/JobExperience";
import HirePage from "./pages/HirePage"


function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<Sample />} />
      <Route index path="/login-recruiter" element={<LoginRecruiter />} />
      <Route index path="/confirm-password" element={<ConfirmPassword />} />
      <Route index path="/job-experience" element={<JobExperience />} />
      <Route index path="/HirePage" element={<HirePage />} />

    </Routes>
  );
}

export default App;
