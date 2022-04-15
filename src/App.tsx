import { SideBar } from "./components/SideBar";
import { NavBar } from "./components/NavBar";
import { BodyContent } from "./components/BodyContent";
import { Projects } from "./components/Projects";
import { Courses } from "./components/Courses";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import bio from "./assets/bio.json";
import skills from "./assets/skills.json";
import projects from "./assets/projects.json";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`${
        darkMode ? "myDarker text-white" : ""
      }  App container-fluid row pb-lg-5`}
    >
      <SideBar darkMode={darkMode} />
      <div
        className={`${
          darkMode ? "bg-dark text-white" : "bg-light"
        } col-xl-8 col-12 ms-xl-5 row myBrad position-relative py-5 px-3`}
      >
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            index
            element={
              <BodyContent
                pageContent={{
                  pageName: "About Me",
                  subHeader: "About",
                }}
                json={bio}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="bio"
            element={
              <BodyContent
                pageContent={{
                  pageName: "About Me",
                  subHeader: "About",
                }}
                json={bio}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="skills"
            element={
              <BodyContent
                pageContent={{
                  pageName: "My Skills",
                  subHeader: "Technologies",
                }}
                json={skills}
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
