import React from "react";
import RandomBeerImage from "../../assets/random-beer.png";

import Hero from '../../components/hero/hero.component';

import "./random-beer.styles.scss";

const RandomBeer = () => (
  <div>
    <Hero
      background={ RandomBeerImage }
      title="Random Beer"
      subtitle="Choose a random beer!"
    />
  </div>
);

export default RandomBeer;