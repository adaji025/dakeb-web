import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/Reset-password";
import NewPassword from "./pages/Auth/New-password";
import LoggedInContainer from "./components/LoggedIn";

function App() {
  const [loggedIn] = React.useState(false);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/*" element={loggedIn ? <LoggedInContainer /> : <Login />} />
    </Routes>
  );
}

export default App;
