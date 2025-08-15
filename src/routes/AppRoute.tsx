import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Home from "../pages/Home/Home";
import ProjectsList from "../pages/Project/ProjectsList";
import ProjectData from "../pages/Project/ProjectData";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import NotFound from "../components/NotFoundError/NotFound";
import type { FC } from "react";

interface AppRoutesProps {
  isMobile: boolean;
}

const AppRoutes: FC<AppRoutesProps> = ({ isMobile }) => {
  return (
    <>
      <NavBar />
      <main>
        <ScrollToTop smooth />
        <Routes>
          <Route path="/" element={!isMobile ? <Home /> : <ProjectsList />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:name" element={<ProjectData />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />

          <Route path="/en" element={!isMobile ? <Home /> : <ProjectsList />} />
          <Route path="/en/projects" element={<ProjectsList />} />
          <Route path="/en/projects/:name" element={<ProjectData />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/blog" element={<Blogs />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default AppRoutes;
