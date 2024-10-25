import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/HomeComponent";
import PropsStateComponent from "../../pages/test/prop_state/PropsStateComponent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/props_state" element={<PropsStateComponent />} />
    </Routes>
  );
};

export const fetchMenuData = () => {
  // Mimic backend call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "2024-10-24": [
          { path: "/", label: "Home" },
          { path: "/props_state", label: "Props & State Test 2" },
          { path: "/props_state", label: "Props & State Test 3" },
        ],
        "2024-10-25": [
          { path: "/props_state", label: "Props & State Test 4" },
          { path: "/props_state", label: "Props & State Test 5" },
          { path: "/props_state", label: "Props & State Test 6" },
        ],
      });
    }, 500); // Simulate network delay
  });
};

export default AppRoutes;
