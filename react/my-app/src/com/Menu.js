import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchMenuData } from "./route/AppRoute";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMenu } from "../pages/test/redux/reducers/activeMenuReducer";

const Menu = () => {
  const [menus, setMenus] = useState({});
  const activeMenu = useSelector((state) => state.activeMenu.activeMenu);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    fetchMenuData().then((data) => {
      setMenus(data);

      const currentPath = location.pathname;
      Object.keys(data).find((menu) => {
        if (data[menu].some((subMenu) => subMenu.path === currentPath)) {
          dispatch(setActiveMenu(menu));
        }
      });
    });
  }, [location.pathname, dispatch]);

  const toggleMenu = (menu) => {
    dispatch(setActiveMenu(menu));
  };

  return (
    <nav>
      {Object.keys(menus).map((menu) => (
        <div key={menu}>
          <div
            className="menu-header"
            onClick={() => toggleMenu(menu)}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          >
            {menu}
          </div>
          {activeMenu === menu && (
            <div className="submenu">
              {menus[menu].map((subMenu, index) => (
                <Link key={index} to={subMenu.path} className="d-block">
                  {subMenu.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Menu;
