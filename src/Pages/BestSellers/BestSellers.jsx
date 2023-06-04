import React, { useState } from 'react'
import styles from "./BestSellers.module.css";
import Heading from '../../Components/Heading/Heading';
import { bestSellers } from '../../Constants/PageParts';
import BackHome from '../../Components/BackHome/BackHome';

const BestSellers = () => {

  const {app__sellers, sellers__head, sellers__content, sellers__track, seller__box} = styles;
  const [totalBestSellers] = useState(bestSellers.length / 4);

  return (
    <div className={app__sellers}>

      {/* Heading */}
      <div className={sellers__head}>
        <Heading head={"Best Sellers"} />
      </div>

      {/* Content */}
      <div className={sellers__content}>
        {
          [...Array(totalBestSellers)].map((_, index) => {
            return (
              <div key={index} className={sellers__track}>
                {
                  bestSellers.slice(4 * index, (4 * (index + 1))).map((item) => {
                    return (
                      <div key={item.id} className={seller__box}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <p>Rs {item.price}/-</p>
                      </div>
                    );
                  })
                }
              </div>
            )
          })
        }
      </div>

      {/* Back Home */}
      
      <BackHome/>

      {/* Back Home */}

    </div>
  )
}

export default BestSellers