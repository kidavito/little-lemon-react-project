import "./ButtonGoldGlow.css";
import { Link } from "react-router-dom";

export default function ButtonGoldGlow(props) {
    return (
        <Link to={props.link}>
            <button className="button-gold-glow">{props.text}</button>
        </Link>
    )
}