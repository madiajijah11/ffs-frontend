import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import LoginRecruiter from "./pages/LoginRecruiter";

import Sample from "./pages/Sample";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<Sample />} />
      <Route path="/login-recruiter" element={<LoginRecruiter />} />
    </Routes>
  );
}

export default App;
