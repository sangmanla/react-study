import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/HomeComponent";
import PropsStateComponent from "../../pages/test/prop_state/PropsStateComponent";
import ReduxComponent from "../../pages/test/redux/ReduxComponent";
import UseStateCallbackComponent from "../../pages/test/prop_state/UseStateCallbackComponent";
import InputEventTestComponent from "../../pages/test/event/OnChagneComponent";
import ToDoAppComponent from "../../pages/TodoList/ToDoApp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/props_state" element={<PropsStateComponent />} />
      <Route path="/redux" element={<ReduxComponent />} />
      <Route path="/useStateCallback" element={<UseStateCallbackComponent />} />
      <Route path="/inputEvent" element={<InputEventTestComponent />} />
      <Route path="/todoList" element={<ToDoAppComponent />} />
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
          { path: "/inputEvent", label: "InputEvent" },
          { path: "/todoList", label: "TodoList" },
        ],
      });
    }, 500); // Simulate network delay
  });
};

export default AppRoutes;
