import "./Hero.css";
import ButtonGoldGlow from "./ButtonGoldGlow";
import hero_image from '../assets/img/hero_image.jpg';

export default function Hero() {
    return (
        <section id="hero">
            <article className="hero-container">
                <div className="hero-text-container">
                    <h1 className="hero-title">Little Lemon</h1>
                    <h2 className="hero-locale">Chicago</h2>
                    <p className="hero-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <ButtonGoldGlow link="/reservations" text="Reserve a Table" />
                </div>
                <img src={hero_image} className="hero-image" alt="hero" />
            </article>
        </section>
    )
}