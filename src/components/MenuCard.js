import "./MenuCard.css";
import LinkOrderOnline from "./LinkOrderOnline";

export default function MenuCard(props) {
  return (
    <section className="card">
      <article className="card-container">
        <img
          className="card-image"
          src={require(`../assets/img/${props.cardImage}`)}
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
