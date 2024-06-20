import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import useNavigationEffect from "./hooks/useNavigationEffect"; // Ensure this path matches the location of your custom hook



import Settings from "./pages/protected/Settings";
import Home from "./pages/public/Home";
import Profile from "./pages/protected/Profile";

import Navbar from "./components/public/Navbar";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";

function App() {
  // Invoke the custom hook to handle side effects on navigation
  useNavigationEffect();

  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const handleLogin = (status, username) => {
    setLoggedIn(status);
    setUsername(username); // Set the username
    localStorage.setItem("isLoggedIn", status.toString());
    localStorage.setItem("username", username); // Store the username in localStorage
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    setUsername(""); // Clear the username
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username"); // Remove the username from localStorage
  };

  const noNavbarRoutes = [
      "/login",
    "/register",
    "/settings",
    "/profile",
    "/dashboard",
  ];



  return (
    <>
    {!noNavbarRoutes.includes(location.pathname) && (
      <Navbar isLoggedIn={isLoggedIn} onSignOut={handleSignOut} />
      )}
    <Routes>


      <Route path="/settings" element={<Settings username={username} setUsername={setUsername} onSignOut={handleSignOut}/>} />
      <Route path="/profile" element={<Profile username={username} onSignOut={handleSignOut}/>} />

      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/register" element={<Register onLogin={handleLogin} />} />
          <Route path="/" element={<Home/>} />
</Routes>
      </>
  );
}

export default App;
