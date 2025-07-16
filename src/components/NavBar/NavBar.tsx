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
      {isMobile && (
        <div className={classes["floating-toggle"]}>
          <LiquidToggleButton />
        </div>
      )}
      <div className={classes["header-container"]}>
        <div className={classes.logo}>
          <NavLink to={isMobile ? "/projects" : "/"}>
            <img style={{ width: "80px" }} src={"/thatLab.png"} />
            <p
              style={{
                padding: "0",
                marginTop: "-0.4rem",
                fontSize: "16px",
              }}
            >
              {t("THAT DESING OFFICE")}
            </p>
          </NavLink>
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
              to="/blog"
            >
              {t("Blogs")}
            </NavLink>
          </nav>
          {!isMobile && <LiquidToggleButton />}
        </div>
      </div>
    </header>
  );
};

export default Header;
