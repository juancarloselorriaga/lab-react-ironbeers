import React from "react";
import BeersImage from "../../assets/beers.png";

import Hero from '../../components/hero/hero.component';

import "./beers.styles.scss";

const Beer = () => (
  <div>
    <Hero
      background={ BeersImage }
      title="Beers"
      subtitle="Check out our beer catalog!"
    />
  </div>
);

export default Beer;
