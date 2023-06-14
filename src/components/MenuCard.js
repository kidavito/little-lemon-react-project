import "./MenuCard.css";
import { Link } from "react-router-dom";

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
          <Link to={props.cardUrlPath} className="link-order-online">
            <p>
              Order a delivery <i className="fa-solid fa-truck-fast" />
            </p>
          </Link>
        </div>
      </article>
    </section>
  );
}
