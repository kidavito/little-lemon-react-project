import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/little-lemon-react-project" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/little-lemon-react-project/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/little-lemon-react-project/menu" className="nav-link">
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/little-lemon-react-project/reservations"
            className="nav-link"
          >
            Reservations
          </Link>
        </li>
        <li>
          <Link
            to="/little-lemon-react-project/order-online"
            className="nav-link"
          >
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/little-lemon-react-project/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
