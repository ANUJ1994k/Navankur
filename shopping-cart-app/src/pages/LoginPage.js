import React from "react";
import Login from "../components/Login";

const LoginPage = ({ setToken }) => { // Receive setToken from App.js
  return <Login setToken={setToken} />;
};

export default LoginPage;
