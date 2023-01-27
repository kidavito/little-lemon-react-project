import header_logo from '../assets/img/little_lemon_logo.png';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src={header_logo} height={50} alt="Little Lemon Header Logo" />
            </Link>
        </header>
    )
}