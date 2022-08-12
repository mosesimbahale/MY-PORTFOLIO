//common imports
import "./App.css";
import { Routes, Route } from "react-router-dom";

//Pages imports
import Home from "./pages/Home";
import ProjectsWeb from "./pages/ProjectsWeb";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import ProjectsDS from "./pages/ProjectsDS";
import ProjectsML from "./pages/ProjectsML";
import ProjectsMobile from "./pages/ProjectsMobile";

import Blog from "./pages/Blog";

import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />

        <Route path="/Projects" element={<Projects />} />
        <Route path="/ProjectsWeb" element={<ProjectsWeb />} />
        <Route path="/ProjectsDS" element={<ProjectsDS />} />
        <Route path="/ProjectsML" element={<ProjectsML />} />
        <Route path="/ProjectsMobile" element={<ProjectsMobile />} />

        <Route path ="/blog" element={<Blog />} />
        <Route path ="/contact" element={<Contact />} />



        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
