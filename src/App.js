import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import LandingPage from "./pages/LandingPage";
import LoginEmployee from "./pages/LoginEmployee";
import LoginRecruiter from "./pages/LoginRecruiter";
import RegisterRecruiter from "./pages/RegisterRecruiter";
import ResetPassword from "./pages/ResetPassword";
import RegisterEmployee from "./pages/RegisterEmployee";
import ConfirmPassword from "./pages/ConfirmPassword";
import JobExperience from "./pages/JobExperience";
import HirePage from "./pages/HirePage";
import Home from "./pages/Home";
import ChatBlank from "./pages/ChatBlank";
import Chat from "./pages/Chat";
import ProfileReqruiter from "./pages/ProfileReqruiter";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login--employee" element={<LoginEmployee />} />
      <Route path="/login-recruiter" element={<LoginRecruiter />} />
      <Route path="/register-recruiter" element={<RegisterRecruiter />} />
      <Route path="/register-employee" element={<RegisterEmployee />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/job-experience" element={<JobExperience />} />
      <Route path="/hire-page" element={<HirePage />} />
      <Route path="/chat-blank" element={<ChatBlank />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profil-reqruiter" element={<ProfileReqruiter />} />

    </Routes>
  );
}

export default App;
