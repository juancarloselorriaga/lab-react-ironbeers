import React from "react";

import "./hero.styles.scss";

const Hero = ({ background, title, subtitle }) => (
  <div className="hero-with-navbar">
    <section className="hero is-success is-fullheight-with-navbar has-background">
      <img
        alt="reactive iron beers"
        className="hero-background is-transparent"
        src={background}
      />
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
      </div>
    </section>
  </div>
);

export default Hero;
