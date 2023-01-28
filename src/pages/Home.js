import './Home.css';
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import Cards from '../components/Cards';

export default function Home() {
    return (
        <>
            <Hero
                heroTitle="Little Lemon"
                heroLocation="Chicago"
                heroDescription="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                heroButtonLink="/reservations"
                heroButtonText="Reserve a Table"
            />
            <Promo />
            <Cards />
        </>
    )
}