import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMenuData } from "./route/AppRoute";

const Menu = () => {
  const [menus, setMenus] = useState({});
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    fetchMenuData().then((data) => {
      setMenus(data);
    });
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
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
