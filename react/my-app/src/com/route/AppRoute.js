import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/HomeComponent";
import PropsStateComponent from "../../pages/test/prop_state/PropsStateComponent";
import ReduxComponent from "../../pages/test/redux/ReduxComponent";
import UseStateCallbackComponent from "../../pages/test/prop_state/UseStateCallbackComponent";
import InputEventTestComponent from "../../pages/test/event/OnChagneComponent";
import ToDoApp from "../../pages/TodoList/ToDoApp";
import UsefulLinks from "../../pages/UsefulLinks/UsefulLinks";
import PassingPropsToaComponent from "../../pages/test/prop_state/PassingPropsToaComponent";
import ChildrenExample from "../../pages/test/ChildrenExample";

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
      <Route
        path="/passingPropsToaComponent"
        element={<PassingPropsToaComponent />}
      />
      <Route path="/childrenExample" element={<ChildrenExample />} />
    </Routes>
  );
};

export const fetchMenuData = () => {
  // Mimic backend call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
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
        "2024-10-27": [
          {
            path: "/passingPropsToaComponent",
            label: "Passing props to a component",
          },
          {
            path: "/childrenExample",
            label: "Children Example",
          },
        ],
      });
    }, 500); // Simulate network delay
  });
};

export default AppRoutes;
