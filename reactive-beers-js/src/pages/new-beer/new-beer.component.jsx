import React from "react";
import NewBeerImage from "../../assets/new-beer.png";

import Hero from "../../components/hero/hero.component";

import "./new-beer.styles.scss";

const NewBeer = () => (
  <div>
    <Hero
      background={ NewBeerImage }
      title="New Beer"
      subtitle="You can add a new beer!"
    />
  </div>
);

export default NewBeer;
