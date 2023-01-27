import './Footer.css'
import footer_logo from '../assets/img/little_lemon_logo.png';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <article className='footer-container'>
                <Link to="/">
                    <img src={footer_logo} height={50} alt="Little Lemon Footer Logo" />
                </Link>
                <p>Copyright &copy; 2023 Little Lemon | Coded by <a href="https://github.com/kidavito" target="blank" id="coder">kidavito</a>.</p>
            </article>
        </footer>
    )
}