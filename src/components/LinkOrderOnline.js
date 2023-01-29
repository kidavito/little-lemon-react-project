import "./LinkOrderOnline.css";
import { Link } from "react-router-dom";

export default function LinkOrderOnline() {
    return (
        <Link to="/order-online" className="link-order-online">
            <p>Order a delivery <i className="fa-solid fa-truck-fast" /></p>
        </Link>
    )
}