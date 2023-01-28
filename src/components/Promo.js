import "./Promo.css";
import { Link } from "react-router-dom";

export default function Promo() {
    return (
        <section id="promo">
            <h2 className="promo-title">This weeks specials!</h2>
            <Link to="/order-online">
                <button className="promo-button">Online Menu</button>
            </Link>
        </section>
    )
}