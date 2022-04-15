import { NavLink } from "react-router-dom"

export const NavBar = ({ darkMode, setDarkMode }: {darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <div className="nav col-xl-8 col-11 p-0 m-0">
        <ul className="d-flex myDark container justify-content-lg-around justify-content-between align-items-center bg-yellow p-4">
          <li>
            <NavLink to="/skills">My Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses Learned</NavLink>
          </li>
          <li>
            <NavLink to="/bio">Bio</NavLink>
          </li>
          <li>
            <button className={darkMode ? 'myactive myBrad border px-2 myAlternate' : 'myDark border myBrad px-2 text-white'} onClick={e => setDarkMode(!darkMode)}>Dark Mode</button>
          </li>
        </ul>
      </div>
    )
}