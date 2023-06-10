import "./Home.css";
import Hero from "../components/Hero";
import Promo from "../components/Promo";
import Cards from "../components/Cards";

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
      <Promo
        promoTitle="This weeks specials!"
        promoButtonLink="/little-lemon-react-project/menu"
        promoButtonText="Online Menu"
      />
      <Cards
        firstCardTitle="Greek Salad"
        firstCardPrice="$12.99"
        firstCardDescription="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        secondCardTitle="Bruschetta"
        secondCardPrice="$ 5.99"
        secondCardDescription="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        thirdCardTitle="Lemon Dessert"
        thirdCardPrice="$ 5.00"
        thirdCardDescription="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
      />
    </>
  );
}
