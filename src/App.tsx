import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectsList from "../src/pages/Project/ProjectsList";
import About from "./pages/About/About";

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
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                !isMobile ? (
                  <Home />
                ) : (
                  <ProjectsList
                    onSelect={(project) => {
                      console.log("پروژه انتخاب شد:", project);
                    }}
                  />
                )
              }
            />
            <Route
              path="/projects"
              element={
                <ProjectsList
                  onSelect={(project) => {
                    console.log("پروژه انتخاب شد:", project);
                  }}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
