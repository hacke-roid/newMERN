import React, { useState } from "react";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register.jsx";
import DashBoard from "./DashBoard.jsx";
import Main from "./Main.jsx";

const Routers = () => {
  const [userData, setUserData] = useState("");

  const handleChange = (data) => {
    setUserData(data)
  }

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Main/>}/>
        <Route
          path="/login"
          element={<App userData={userData} onChange={handleChange} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard userData={userData} />} />
      </Routes>
    </Router>
  );
};

export default Routers;
