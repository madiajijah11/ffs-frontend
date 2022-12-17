import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import Sample from "./pages/sample";
import LoginEmployee from "./pages/LoginEmployee";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<Sample />} />
      <Route index path="/loginemployee" element={<LoginEmployee />} />
    </Routes>
  );
}

export default App;
