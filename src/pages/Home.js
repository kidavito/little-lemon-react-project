import React from "react";
import "./Home.css";
import Hero from "../components/Hero";
import Promo from "../components/Promo";
import MenuCard from "../components/MenuCard";

import MENU_LIST from "../MenuList";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Promo />
      <div className="card">
        {MENU_LIST.map((menuList) => (
          <MenuCard
            key={menuList.id}
            cardImage={menuList.image}
            cardTitle={menuList.title}
            cardPrice={menuList.price}
            cardDescription={menuList.description}
            cardUrlPath={menuList.urlPath}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
