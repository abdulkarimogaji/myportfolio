import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className="nav w-75">
        <ul className="d-flex myDark container justify-content-around bg-yellow p-4">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="">Resume</NavLink>
          </li>
          <li>
            <NavLink to="">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="">Blog</NavLink>
          </li>
          <li>
            <NavLink to="">Contact</NavLink>
          </li>
        </ul>
      </div>
    )
}