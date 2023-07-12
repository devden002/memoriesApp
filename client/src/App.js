import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Loader from "./components/Loader";
import Template from "./Template/Template";
import LoginTemplate from './Template/LoginTemplate'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const loading = useSelector((state) => state.auth.isLoading);
  const location = useLocation()
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")))
  }, [location])
  
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      {user? <Template/> : <LoginTemplate/>}
    </div>
  );
}

export default App;
