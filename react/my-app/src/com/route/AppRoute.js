import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/HomeComponent";
import InputEventTestComponent from "../../pages/test/event/OnChagneComponent";
import PropsStateComponent from "../../pages/test/prop_state/PropsStateComponent";
import UseStateCallbackComponent from "../../pages/test/prop_state/UseStateCallbackComponent";
import ReduxComponent from "../../pages/test/redux/ReduxComponent";
import ToDoApp from "../../pages/TodoList/ToDoApp";
import UsefulLinks from "../../pages/UsefulLinks/UsefulLinks";
import Oct272024Routes, { fetchMenuDataOct272024 } from "./Oct272024Route";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usefulLinks" element={<UsefulLinks />} />
      <Route path="/props_state" element={<PropsStateComponent />} />
      <Route path="/redux" element={<ReduxComponent />} />
      <Route path="/useStateCallback" element={<UseStateCallbackComponent />} />
      <Route path="/inputEvent" element={<InputEventTestComponent />} />
      <Route path="/todoList" element={<ToDoApp />} />
      <Route path="/*" element={<Oct272024Routes />} />
    </Routes>
  );
};

export const fetchMenuData = () => {
  // Mimic backend call
  return new Promise((resolve) => {
    setTimeout(() => {
      const baseMenuData = {
        "Useful Links": [{ path: "/usefulLinks", label: "UsefulLinks" }],
        "2024-10-24": [
          { path: "/", label: "Home" },
          { path: "/props_state", label: "Props" },
        ],
        "2024-10-26": [
          { path: "/redux", label: "Redux" },
          { path: "/useStateCallback", label: "useStateCallback" },
          { path: "/inputEvent", label: "InputEvent" },
          { path: "/todoList", label: "TodoList" },
        ],
      };

      // add here
      const fetchMenuDataFunctions = [fetchMenuDataOct272024];

      Promise.all(fetchMenuDataFunctions.map((fn) => fn())).then(
        (menuDataArray) => {
          const mergedMenuData = menuDataArray.reduce(
            (acc, menuData) => ({
              ...acc,
              ...menuData,
            }),
            baseMenuData
          );
          resolve(mergedMenuData);
        }
      );
    }, 500); // Simulate network delay
  });
};

export default AppRoutes;
