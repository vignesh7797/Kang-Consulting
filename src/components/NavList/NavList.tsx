import { NavLink } from "react-router-dom"
import './NavLink.css';

interface NavListProps {
  onNavClick: () => void; // Callback prop
}


const NavList: React.FC<NavListProps> = ({onNavClick}) =>{

  const handleNavClick = () =>{
    onNavClick()
  }
  return (
    <nav>
      <ul className="navList">
        <li>
          <NavLink onClick={handleNavClick} to="/" className={({ isActive }) => (isActive ? "active link" : "link")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleNavClick} to="/services" className={({ isActive }) => (isActive ? "active link" : "link")}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleNavClick} to="/about" className={({ isActive }) => (isActive ? "active link" : "link")}>
          About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleNavClick} to="/blogs" className={({ isActive }) => (isActive ? "active link" : "link")}>
          Blogs
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleNavClick} to="/contact" className={({ isActive }) => (isActive ? "active link" : "link")}>
          Contacts
          </NavLink>
        </li>
      </ul>

      <button onClick={handleNavClick} className="block lg:hidden text-white border-[2px] border-white w-52 h-12 my-0 mx-auto mt-12">
        <NavLink className="block w-full h-full py-2" to="/contact">Get in Touch</NavLink>
      </button>
    </nav>
  )
}

export default NavList