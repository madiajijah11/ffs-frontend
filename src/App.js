import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import Sample from "./pages/Sample";
import LoginEmployee from "./pages/LoginEmployee";
import LoginRecruiter from "./pages/LoginRecruiter";
import RegisterRecruiter from "./pages/ResgisterRecruiter";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import ConfirmPassword from "./pages/ConfirmPassword";
import JobExperience from "./pages/JobExperience";
import HirePage from "./pages/HirePage"
import Home from "./pages/Home";
import ChatBlank from "./pages/ChatBlank";
import Chat from "./pages/Chat";


function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<Sample />} />
      <Route path="/loginemployee" element={<LoginEmployee />} />
      <Route path="/login-recruiter" element={<LoginRecruiter />} />
      <Route path="/register-recruiter" element={<RegisterRecruiter />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/job-experience" element={<JobExperience />} />
      <Route path="/HirePage" element={<HirePage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/ChatBlank" element={<ChatBlank />} />
      <Route path="/Chat" element={<Chat />} />

    </Routes>
  );
}

export default App;
