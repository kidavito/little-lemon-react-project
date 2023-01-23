import header_logo from '../assets/img/little_lemon_logo.png';

function Header() {
    return <header>
        <img src={header_logo} height={100} alt="Little Lemon Header Logo" />
    </header>;
}

export default Header;