import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import Works from "./Pages/Works";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} /> 

        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />

        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
