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

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ProjectsWeb" element={<ProjectsWeb />} />
        <Route path="/ProjectsDS" element={<ProjectsDS />} />
        <Route path="/ProjectsML" element={<ProjectsML/> } />
        <Route path= "/ProjectsMobile" element={<ProjectsMobile />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
