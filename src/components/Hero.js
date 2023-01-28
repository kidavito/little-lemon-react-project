import "./Hero.css";
import ButtonGoldGlow from "./ButtonGoldGlow";
import hero_image from '../assets/img/hero_image.jpg';

export default function Hero(props) {
    return (
        <section id="hero">
            <article className="hero-container">
                <div className="hero-text-container">
                    <h1>{props.heroTitle}</h1>
                    <h2>{props.heroLocation}</h2>
                    <p>{props.heroDescription}</p>
                    <ButtonGoldGlow buttonLink={props.heroButtonLink} buttonText={props.heroButtonText} />
                </div>
                <img src={hero_image} className="hero-image" alt="hero" />
            </article>
        </section>
    )
}