import { SideBar } from "./components/SideBar";
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects";
import { Courses } from "./components/Courses";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import projects from "./assets/projects.json";
import { About } from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`${
        darkMode ? "myDarker text-white" : ""
      }  App container-fluid row pb-lg-5 fs-lg-6 sm`}
    >
      <SideBar darkMode={darkMode} />
      <div
        className={`${
          darkMode ? "bg-dark text-white" : "bg-light"
        } col-xl-8 col-12 ms-xl-5 row myBrad position-relative py-5 px-3`}
      >
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route index element={<About darkMode={darkMode} />} />
          <Route path="bio" element={<About  darkMode={darkMode}/>} />
          <Route
            path="skills"
            element={
              <Skills
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="projects"
            element={<Projects json={projects} darkMode={darkMode} />}
          />
          <Route path="courses" element={<Courses darkMode={darkMode} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
