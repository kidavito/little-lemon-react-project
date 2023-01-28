import "./ButtonGoldGlow.css";
import { Link } from "react-router-dom";

export default function ButtonGoldGlow(props) {
    return (
        <Link to={props.buttonLink}>
            <button className="button-gold-glow">{props.buttonText}</button>
        </Link>
    )
}