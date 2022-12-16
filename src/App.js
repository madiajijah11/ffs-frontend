import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import Sample from "./pages/Sample";
import ConfirmPassword from "./pages/ConfirmPassword";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<Sample />} />
      <Route index path="/confirmPassword" element={<ConfirmPassword/>} />
    </Routes>
  );
}

export default App;
