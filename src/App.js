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
import ProfilePortofolioV1 from "./pages/ProfilePortofolioV1";
import ChatBlank from "./pages/ChatBlank";
import Chat from "./pages/Chat";
import ProfileRecruiter from "./pages/ProfileRecruiter";
import EditEmployee from "./pages/EditEmployee";
import EditRecruiter from "./pages/EditRecruiter";
import NotFoundPage from "./pages/404";
import Profile from "./pages/Profile";
import NotLoggedInRoute from "./components/NotLoggedIn";
import IsLoggedInRoute from "./components/IsLoggedIn";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route index path="/" element={<LandingPage />} />
      <Route
        path="/home"
        element={
          <IsLoggedInRoute>
            <Home />
          </IsLoggedInRoute>
        }
      />
      <Route
        path="/login-employee"
        element={
          <NotLoggedInRoute>
            <LoginEmployee />
          </NotLoggedInRoute>
        }
      />
      <Route
        path="/login-recruiter"
        element={
          <NotLoggedInRoute>
            <LoginRecruiter />
          </NotLoggedInRoute>
        }
      />
      <Route
        path="/register-recruiter"
        element={
          <NotLoggedInRoute>
            <RegisterRecruiter />
          </NotLoggedInRoute>
        }
      />
      <Route
        path="/register-employee"
        element={
          <NotLoggedInRoute>
            <RegisterEmployee />
          </NotLoggedInRoute>
        }
      />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route
        path="/job-experience/:id"
        element={
          <IsLoggedInRoute>
            <JobExperience />
          </IsLoggedInRoute>
        }
      />
      <Route
        path="/hire-page/:id"
        element={
          <IsLoggedInRoute>
            <HirePage />
          </IsLoggedInRoute>
        }
      />
      <Route
        path="/chat-blank"
        element={
          <IsLoggedInRoute>
            <ChatBlank />
          </IsLoggedInRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <IsLoggedInRoute>
            <Chat />
          </IsLoggedInRoute>
        }
      />
      <Route
        path="/profile-recruiter"
        element={
          <IsLoggedInRoute>
            <ProfileRecruiter />
          </IsLoggedInRoute>
        }
      />
      <Route
        path="/edit-employee"
        element={
          <IsLoggedInRoute>
            <EditEmployee />
          </IsLoggedInRoute>
        }
      />
      <Route
        path="/edit-recruiter"
        element={
          <IsLoggedInRoute>
            <EditRecruiter />
          </IsLoggedInRoute>
        }
      />
      <Route
        path="/profile-portofolio/:id"
        element={
          <IsLoggedInRoute>
            <ProfilePortofolioV1 />
          </IsLoggedInRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <IsLoggedInRoute>
            <Profile />
          </IsLoggedInRoute>
        }
      />
    </Routes>
  );
}

export default App;
