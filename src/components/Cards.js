import "./Cards.css";
import greek_salad from '../assets/img/greek_salad.jpg';
import bruschetta from '../assets/img/bruschetta.jpg';
import lemon_dessert from '../assets/img/lemon_dessert.jpg';
import LinkOrderOnline from "./LinkOrderOnline";

export default function Cards(props) {
    return (
        <section id="cards">
            <article className="card-container" id="card-one">
                <img src={greek_salad} className="card-image" alt="greek-salad" />
                <div className="card-top">
                    <h3>{props.firstCardTitle}</h3>
                    <p>{props.firstCardPrice}</p>
                </div>
                <div className="card-middle">
                    <p>{props.firstCardDescription}</p>
                </div>
                <div className="card-bottom">
                    <LinkOrderOnline />
                </div>
            </article>
            <article className="card-container" id="card-two">
                <img src={bruschetta} className="card-image" alt="bruschetta" />
                <div className="card-top">
                    <h3>{props.secondCardTitle}</h3>
                    <p>{props.secondCardPrice}</p>
                </div>
                <div className="card-middle">
                    <p>{props.secondCardDescription}</p>
                </div>
                <div className="card-bottom">
                    <LinkOrderOnline />
                </div>
            </article>
            <article className="card-container" id="card-three">
                <img src={lemon_dessert} className="card-image" alt="lemon-dessert" />
                <div className="card-top">
                    <h3>{props.thirdCardTitle}</h3>
                    <p>{props.thirdCardPrice}</p>
                </div>
                <div className="card-middle">
                    <p>{props.thirdCardDescription}</p>
                </div>
                <div className="card-bottom">
                    <LinkOrderOnline />
                </div>
            </article>
        </section>
    )
}