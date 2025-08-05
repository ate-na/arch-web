import LiquidToggleButton from "../../components/Button/LiquidToggleButton";
import classes from "../NavBar/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useIsMobile from "../../hooks/useIsMobile";
import { useHomeModal } from "../../store/useHomeModal";

const Header = () => {
  const { t } = useTranslation();
  const { selectedProject, setSelectedProject } = useHomeModal();
  const isMobile = useIsMobile();
  const isHome =
    location.pathname === "/" || location.pathname.includes("projects");

  return (
    <header className={classes["main-header"]}>
      {isMobile && (
        <div className={classes["floating-toggle"]}>
          <LiquidToggleButton />
        </div>
      )}
      <div className={classes["header-container"]}>
        <div className={classes.logo}>
          <NavLink
            onClick={() => selectedProject && setSelectedProject(null)}
            to={isMobile ? "/projects" : "/"}
          >
            <img
              style={{ width: "80px" }}
              src={"/thatLab.png"}
              alt={t("THAT DESIGN OFFICE")}
            />
            {isHome ? (
              <h1 className={classes.title}>{t("THAT DESIGN OFFICE")}</h1>
            ) : (
              <p className={classes.title}>{t("THAT DESIGN OFFICE")}</p>
            )}
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
