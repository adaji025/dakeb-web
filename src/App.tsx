import { Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/Reset-password";
import NewPassword from "./pages/Auth/New-password";
import LoggedInContainer from "./components/LoggedIn";

import "./App.css";

function App() {
  const token = localStorage.getItem("token");

  return (
    <MantineProvider
      theme={{
        primaryColor: "green",
        fontFamily: "Aeonik, sans-serif",
        defaultRadius: 8,
      }}
    >
      <Notifications position="top-right" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/*" element={token ? <LoggedInContainer /> : <Login />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
