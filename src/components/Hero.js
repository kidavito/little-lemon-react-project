import "./Hero.css";
import { Link } from "react-router-dom";
import hero_image from '../assets/img/hero_image.jpg';

export default function Hero() {
    return (
        <section id="hero">
            <article className="hero-container">
                <div className="hero-text-container">
                    <h1 className="hero-title">Little Lemon</h1>
                    <h2 className="hero-locale">Chicago</h2>
                    <p className="hero-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/reservations">
                        <button className="hero-button">Reserve a Table</button>
                    </Link>
                </div>
                <img src={hero_image} className="hero-image" alt="hero" />
            </article>
        </section>
    )
}