import './Footer.css';
// import ThemeManager from '../ThemeManager';
import footer_logo from '../../assets/img/little_lemon_logo.png';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer >
            <section className='footer-container'>
                {/* <ThemeManager /> */}
                <article>
                    <Link to="/">
                        <img src={footer_logo} height={50} alt="Little Lemon Footer Logo" />
                    </Link>
                    <p>Copyright &copy; 2023 Little Lemon</p>
                </article>
            </section>
        </footer>
    )
}