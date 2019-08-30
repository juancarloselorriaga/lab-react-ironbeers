import React from "react";
import HeroImage from "../../assets/beers.png";

import "./hero.styles.scss";

const Hero = () => (
  <div className="hero-with-navbar">
    <section className="hero is-success is-fullheight-with-navbar has-background">
      <img
        alt="reactive iron beers"
        className="hero-background is-transparent"
        src={HeroImage}
      />
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Welcome to Reactive Iron Beers!</h1>
          <h2 className="subtitle">Feel free to select any beer</h2>
        </div>
      </div>
    </section>
  </div>
);

export default Hero;
