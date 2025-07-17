import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectsList from "../src/pages/Project/ProjectsList";
import About from "./pages/About/About";
import ProjectData from "./pages/Project/ProjectData";
import useIsMobile from "./hooks/useIsMobile";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const { i18n } = useTranslation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return (
    <div className="container" lang={i18n.language}>
      <BrowserRouter>
        <NavBar />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={!isMobile ? <Home /> : <ProjectsList />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/projects/:name" element={<ProjectData />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
