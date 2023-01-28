import "./Promo.css";
import ButtonGoldGlow from "./ButtonGoldGlow";

export default function Promo() {
    return (
        <section id="promo">
            <h2>This weeks specials!</h2>
            <ButtonGoldGlow link="/order-online" text="Online Menu" />
        </section>
    )
}