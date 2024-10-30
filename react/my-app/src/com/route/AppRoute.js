import React from "react";
import { Route, Routes } from "react-router-dom";
import { routesConfig } from "./menu";

const AppRoutes = () => {
  return (
    <Routes>
      {routesConfig.flatMap(({ date, routes }) =>
        routes.map(({ label, component: Component }) => (
          <Route
            key={label}
            path={`/${date}/${label.replace(/\s+/g, "")}`}
            element={<Component />}
          />
        ))
      )}
    </Routes>
  );
};

export const fetchMenuData = () => {
  // Mimic backend call
  return new Promise((resolve) => {
    setTimeout(() => {
      const menuData = routesConfig.reduce((acc, { date, routes }) => {
        acc[date] = routes.map(({ label }) => ({
          path: `/${date}/${label.replace(/\s+/g, "")}`,
          label,
        }));
        return acc;
      }, {});

      resolve(menuData);
    }, 500); // Simulate network delay
  });
};

export default AppRoutes;
