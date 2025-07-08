import "./NavBar.css";
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
    <header className={`main-header`}>
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">that studio</NavLink>
        </div>
        <nav className="nav-links">
          {!isMobile && (
            <NavLink
              className={({ isActive }) => (isActive ? "nav-active" : "")}
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
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to="/about"
          >
            {t("About")}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to="/instagram"
          >
            {t("Instagram")}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
