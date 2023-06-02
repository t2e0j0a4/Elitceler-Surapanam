import React from 'react'
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import Carousal from '../../Components/Carousal/Carousal';
import { homeLanding } from '../../Constants/Carousal';
// import { homeBestSellersDemo } from '../../Constants/PageParts';

const Home = () => {

  const { app__home, home__section1, section1__redirects, redirect__link } = styles;

  return (
    <div className={app__home}>

      {/* Section 1 - Landing Carousal & Redirect Links */}

      <div className={home__section1}>
        <Carousal source={homeLanding}/>
        <div className={section1__redirects}>
          <Link to='/menu' className={redirect__link}>Our Menu</Link>
          <Link to='/gallery' className={redirect__link}>Our Gallery</Link>
        </div>
      </div>

      {/* Section 1 - Landing Carousal & Redirect Links */}



    </div>
  )
}

export default Home