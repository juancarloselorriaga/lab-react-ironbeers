import React from "react";
import HeroImage from "../../assets/hero-image.png";

import Hero from '../../components/hero/hero.component';

import './homepage.styles.scss';

const Homepage = () => (
  <div className='homepage'>
    <Hero background={HeroImage} title='Welcome to Reactive Iron Beers!' subtitle='Select any option to continue' />
  </div>
)

export default Homepage;