import "./Footer.css";
import footer_logo from "../../assets/img/little_lemon_logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <section className="footer-container">
        <article>
          <Link to="/">
            <img src={footer_logo} height={50} alt="Little Lemon Footer Logo" />
          </Link>
          <p>
            Copyright &copy; {year} Little Lemon | Coded by{" "}
            <a href="https://github.com/kidavito" target="blank" id="coder">
              Ki David Andianto
            </a>
            .
          </p>
        </article>
      </section>
    </footer>
  );
}
