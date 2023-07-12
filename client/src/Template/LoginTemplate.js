import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "../pages/Auth/Auth";

const LoginTemplate = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<Auth />} />{" "}
      </Routes>
      
    </div>
  );
};

export default LoginTemplate;
