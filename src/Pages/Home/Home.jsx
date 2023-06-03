import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./Home.module.css";
import event from "../../Assets/HomeEventDummy.png";
import Heading from '../../Components/Heading/Heading';
import Carousal from '../../Components/Carousal/Carousal';
import { homeLanding, homeSpecialCombos } from '../../Constants/Carousal';
import { homeBestSellersDemo, homeHappyCustomers } from '../../Constants/PageParts';

const Home = () => {

  const { app__home, home__section1, section1__redirects, redirect__link, home__section2, section2__head, section2__content, seller__box, home__section3, section3__head, section3__content, home__section4, section4__head, section4__content, quick__opaq, content4__track, track4__item, home__section5, section5__head, section5__content } = styles;

  // Section 4 Reviews Track Moving Functionality

  const [totalReviews] = useState(homeHappyCustomers.length);
  const [baseMove] = useState(100);
  const [movefreq, setMoveFreq] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {setMoveFreq((freq) => freq + 1 === totalReviews ? 0 : freq + 1)}, 10000);
    return (() => clearInterval(intervalID));
    // eslint-disable-next-line
  }, [movefreq]);

  // Section 4 Reviews Track Moving Functionality

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

      {/* Section 3 - Special Combos */}

      <div className={home__section3}>

        {/* Section 3 Heading */}
        <div className={section3__head}>
          <Heading head={"Day's Special Combos"} />
        </div>

        {/* Section 3 Content */}
        <div className={section3__content}>
          <Carousal source={homeSpecialCombos} />
        </div>

      </div>

      {/* Section 3 - Special Combos */}

      {/* Section 4 - Our Happy Customers */}

      <div className={home__section4}>

        {/* Section 4 Heading */}
        <div className={section4__head}>
          <Heading head={"Our Happy Customers"} />
        </div>

        {/* Section 4 Content */}
        <div className={section4__content}>
          <div className={quick__opaq}></div>
          <div className={content4__track}>
            {
              homeHappyCustomers.map((item) => {
                return (
                  <div key={item.id} className={track4__item} style={{ transform: `translateX(-${movefreq * baseMove}%)`, transition : 'transform 0.3s linear' }}>
                    <p>{item.review}</p>
                    <p>{item.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>

      {/* Section 4 - Our Happy Customers */}

      {/* Section 5 - Live Events */}

      <div className={home__section5}>

        {/* Section 5 Heading */}
        <div className={section5__head}>
          <Heading head={"Live Events"} />
        </div>

        {/* Section 5 Content */}
        <div className={section5__content}>
          <img src={event} alt="Event" />
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

      </div>

      {/* Section 5 - Live Events */}

    </div>
  )
}

export default Home