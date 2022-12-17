import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import LoginRecruiter from "./pages/LoginRecruiter";
import Sample from "./pages/sample";
import RegisterRecruiter from "./pages/ResgisterRecruiter";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<Sample />} />
      <Route path="/login-recruiter" element={<LoginRecruiter />} />
      <Route path="/register-recruiter" element={<RegisterRecruiter />} />
    </Routes>
  );
}

export default App;
