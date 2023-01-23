import footer_logo from '../assets/img/little_lemon_logo.png';

function Footer() {
    return <footer>
        <div>
            <img src={footer_logo} height={50} alt="Little Lemon Footer Logo" />
        </div>
        <div>
            <p>Copyright © 2023 Little Lemon</p>
        </div>
    </footer>;
}

export default Footer;