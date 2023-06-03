import React from 'react'
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import Carousal from '../../Components/Carousal/Carousal';
import { homeLanding } from '../../Constants/Carousal';
import Heading from '../../Components/Heading/Heading';
import { homeBestSellersDemo } from '../../Constants/PageParts';

const Home = () => {

  const { app__home, home__section1, section1__redirects, redirect__link, home__section2, section2__head, section2__content, seller__box } = styles;

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

      {/* Section 2 - Best Sellers Few */}

      <div className={home__section2}>

        {/* Section 2 Heading */}
        <div className={section2__head}>
          <Heading head={'Best Sellers'} />
          <Link to={'/bestsellers'}>View More</Link>
        </div>

        {/* Section 2 Content */}
        <div className={section2__content}>
          {
            homeBestSellersDemo.map((item) => {
              return (
                <div key={item.id} className={seller__box}>
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                  <p>Rs {item.price}/-</p>
                </div>
              )
            })
          }
        </div>

      </div>

      {/* Section 2 - Best Sellers Few */}

    </div>
  )
}

export default Home