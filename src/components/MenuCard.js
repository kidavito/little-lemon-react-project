import "./MenuCard.css";
import LinkOrderOnline from "./LinkOrderOnline";

export default function MenuCard(props) {
  return (
    <section id="cards">
      <article className="card-container">
        <img
          src={require(`../assets/img/${props.cardImage}`)}
          className="card-image"
          alt={props.cardTitle}
        />
        <div className="card-top">
          <h3>{props.cardTitle}</h3>
          <p>{props.cardPrice}</p>
        </div>
        <div className="card-middle">
          <p>{props.cardDescription}</p>
        </div>
        <div className="card-bottom">
          <LinkOrderOnline />
        </div>
      </article>
    </section>
  );
}
