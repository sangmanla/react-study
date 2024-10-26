import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/HomeComponent";
import PropsStateComponent from "../../pages/test/prop_state/PropsStateComponent";
import ReduxComponent from "../../pages/test/redux/ReduxComponent";
import UseStateCallbackComponent from "../../pages/test/prop_state/UseStateCallbackComponent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/props_state" element={<PropsStateComponent />} />
      <Route path="/redux" element={<ReduxComponent />} />
      <Route path="/useStateCallback" element={<UseStateCallbackComponent />} />
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
          { path: "/props_state", label: "Props" },
        ],
        "2024-10-26": [
          { path: "/redux", label: "Redux" },
          { path: "/useStateCallback", label: "useStateCallback" },
        ],
      });
    }, 500); // Simulate network delay
  });
};

export default AppRoutes;
