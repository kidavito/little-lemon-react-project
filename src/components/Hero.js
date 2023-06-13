import "./Hero.css";
import ButtonGoldGlow from "./ButtonGoldGlow";
import hero_image from "../assets/img/hero_image.jpg";

export default function Hero() {
  return (
    <section id="hero">
      <article className="hero-container">
        <div className="hero-text-container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <ButtonGoldGlow
            buttonLink="/little-lemon-react-project/reservations"
            buttonText="Reserve a Table"
          />
        </div>
        <img src={hero_image} className="hero-image" alt="hero" />
      </article>
    </section>
  );
}
