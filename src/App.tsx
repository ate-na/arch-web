import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectsList from "../src/pages/Project/ProjectsList";
import About from "./pages/About/About";
import ProjectData from "./pages/Project/ProjectData";

function App() {
  const { i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 960);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    const dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return (
    <div className="container" lang={i18n.language}>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={!isMobile ? <Home /> : <ProjectsList />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/projects/:name" element={<ProjectData />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        {/* {isMobile && (
          <div className="button-wrapper">
            <div className="liquid-bg" />
            <LiquidToggleButton />
          </div>
        )} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
