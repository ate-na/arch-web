import React from "react";
import LiquidToggleButton from "../../components/Button/LiquidToggleButton";
import classes from "../NavBar/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Header = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 960);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <header className={classes["main-header"]}>
      <div className={classes["header-container"]}>
        <div className={classes.logo}>
          <NavLink to="/">that studio</NavLink>
        </div>
        <div className={classes["nav-btn"]}>
          <nav className={classes["nav-links"]}>
            {!isMobile && (
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes["nav-active"] : ""
                }
                to="/projects"
              >
                {t("All Projects")}
              </NavLink>
            )}

            {/* <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to="/blogs"
          >
            {t("Blogs")}
          </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                isActive ? classes["nav-active"] : ""
              }
              to="/about"
            >
              {t("About")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes["nav-active"] : ""
              }
              to="/instagram"
            >
              {t("Instagram")}
            </NavLink>
          </nav>
          <LiquidToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
