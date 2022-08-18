//common imports
import "./App.css";
import { Routes, Route } from "react-router-dom";

//Pages imports
import Home from "./pages/Home";

import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";

import Certifications from "./pages/Certifications";

import Resume from "./pages/Resume";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="certifications" element={<Certifications />} />

        <Route path="/Projects" element={<Projects />} />


        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
