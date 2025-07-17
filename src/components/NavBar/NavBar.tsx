import LiquidToggleButton from "../../components/Button/LiquidToggleButton";
import classes from "../NavBar/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useIsMobile from "../../hooks/useIsMobile";

const Header = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

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
            <p className={classes.title}>{t("THAT DESING OFFICE")}</p>
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
