import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { useState } from 'react';
export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <Link
        to="/"
        className="title"
      >
        Website
      </Link>
      <div
        className="menu"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={openMenu ? 'open' : ''}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
