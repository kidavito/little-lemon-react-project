import "./Promo.css";
import ButtonGoldGlow from "./ButtonGoldGlow";

export default function Promo(props) {
  return (
    <section id="promo">
      <h2>This weeks specials!</h2>
      <ButtonGoldGlow
        buttonLink={"/little-lemon-react-project/menu"}
        buttonText="Online Menu"
      />
    </section>
  );
}
