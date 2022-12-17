import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

<<<<<<< HEAD
import Sample from "./pages/sample";
import LoginEmployee from "./pages/LoginEmployee";
=======
import Sample from "./pages/Sample";
import LoginRecruiter from "./pages/LoginRecruiter";
import ConfirmPassword from "./pages/ConfirmPassword";
import JobExperience from "./pages/JobExperience";
import HirePage from "./pages/HirePage"

>>>>>>> 485cf6ff2b43ca913d69453c195eb984d4ff9ade

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<Sample />} />
<<<<<<< HEAD
      <Route index path="/loginemployee" element={<LoginEmployee />} />
=======
      <Route index path="/login-recruiter" element={<LoginRecruiter />} />
      <Route index path="/confirm-password" element={<ConfirmPassword />} />
      <Route index path="/job-experience" element={<JobExperience />} />
      <Route index path="/HirePage" element={<HirePage />} />

>>>>>>> 485cf6ff2b43ca913d69453c195eb984d4ff9ade
    </Routes>
  );
}

export default App;
