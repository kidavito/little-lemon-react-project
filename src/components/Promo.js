import "./Promo.css";
import ButtonGoldGlow from "./ButtonGoldGlow";

export default function Promo(props) {
    return (
        <section id="promo">
            <h2>{props.promoTitle}</h2>
            <ButtonGoldGlow buttonLink={props.promoButtonLink} buttonText={props.promoButtonText} />
        </section>
    )
}