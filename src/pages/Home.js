import './Home.css';
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import { Link } from "react-router-dom";
import greek_salad from '../assets/img/greek_salad.jpg';
import bruschetta from '../assets/img/bruschetta.jpg';
import lemon_dessert from '../assets/img/lemon_dessert.jpg';

export default function Home() {
    return (
        <>
            <Hero />
            <Promo />
            <section id="cards">
                <article className="card-container" id="card-one">
                        <img src={greek_salad} className="card-image" alt="greek-salad" />
                    <div className="card-top">
                        <h3 className="card-title">Greek Salad</h3>
                        <p className="card-price">$12.99</p>
                    </div>
                    <div className="card-middle">
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    </div>
                    <div className="card-bottom">
                        <Link to="/order-online" className="order-link">
                            <p>Order a delivery <i className="fa-solid fa-truck-fast" /></p>
                        </Link>
                    </div>
                </article>
                <article className="card-container" id="card-two">
                    <img src={bruschetta} className="card-image" alt="bruschetta" />
                    <div className="card-top">
                        <h3 className="card-title">Bruschetta</h3>
                        <p className="card-price">$ 5.99</p>
                    </div>
                    <div className="card-middle">
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    </div>
                    <div className="card-bottom">
                        <Link to="/order-online" className="order-link">
                            <p>Order a delivery <i className="fa-solid fa-truck-fast" /></p>
                        </Link>
                    </div>
                </article>
                <article className="card-container" id="card-three">
                    <img src={lemon_dessert} className="card-image" alt="lemon-dessert" />
                    <div className="card-top">
                        <h3 className="card-title">Lemon Dessert</h3>
                        <p className="card-price">$ 5.00</p>
                    </div>
                    <div className="card-middle">
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    </div>
                    <div className="card-bottom">
                        <Link to="/order-online" className="order-link">
                            <p>Order a delivery <i className="fa-solid fa-truck-fast" /></p>
                        </Link>
                    </div>
                </article>
            </section>
        </>
    )
}