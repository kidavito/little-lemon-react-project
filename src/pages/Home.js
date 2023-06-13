import "./Home.css";
import Hero from "../components/Hero";
import Promo from "../components/Promo";
import MenuCard from "../components/MenuCard";

import MENU_LIST from "../MenuList";

export default function Home() {
  return (
    <>
      <Hero
        heroTitle="Little Lemon"
        heroLocation="Chicago"
        heroDescription="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
        heroButtonLink="/little-lemon-react-project/reservations"
        heroButtonText="Reserve a Table"
      />
      <Promo />
      <div id="cards">
        {MENU_LIST.map((menuList) => (
          <MenuCard
            key={menuList.id}
            cardImage={menuList.image}
            cardTitle={menuList.title}
            cardPrice={menuList.price}
            cardDescription={menuList.description}
          />
        ))}
      </div>
    </>
  );
}
