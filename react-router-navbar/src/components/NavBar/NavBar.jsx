import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
export default function NavBar() {
  return (
    <nav>
      <Link
        to="/"
        className="title"
      >
        Website
      </Link>
      <ul>
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
