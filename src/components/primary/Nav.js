import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/menu" className="nav-link">Menu</Link></li>
                <li><Link to="/reservations" className="nav-link">Reservations</Link></li>
                <li><Link to="/order-online" className="nav-link">Order Online</Link></li>
                <li><Link to="/login" className="nav-link">Login</Link></li>
            </ul>
        </nav>
    )
}