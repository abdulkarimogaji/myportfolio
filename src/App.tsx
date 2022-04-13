import { SideBar } from "./components/SideBar"
import { NavBar } from "./components/NavBar"
import { About } from "./components/About";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App container-fluid row pb-5">
      <SideBar /> 
      <div className="col-8 bg-dark ms-5 myBrad position-relative text-white py-5 px-3">
      <NavBar />
      <Routes>
          <Route index element={<About />}/>
          <Route path="about" element={<About />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
