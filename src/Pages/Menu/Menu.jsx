import React from 'react'
import styles from "./Menu.module.css";
import { menu } from '../../Constants/PageParts';
import Heading from '../../Components/Heading/Heading';
import BackHome from '../../Components/BackHome/BackHome';

const Menu = () => {

  const { app__menu, menu__tips, each__tip, menu__posters, each__poster, poster__head, go__back } = styles;

  return (
    <div className={app__menu}>

      {/* Section 1 - Menu Tips */}

      <div className={menu__tips}>
        {
          menu.menuTips.map((item) => {
            return (
              <a href={`#${item.tipName}`} key={item.id} className={each__tip}>
                <img src={item.tipImage} alt={item.tipName} />
                <span>{item.tipName}</span>
              </a>
            )
          })
        }
      </div>

      {/* Section 1 - Menu Tips */}

      {/* Section 2 - Menu Posters */}

      <div className={menu__posters}>
        {
          menu.menuPosters.map((item) => {
            return (
              <div key={item.id} className={each__poster} id={item.menuFor}>

                {/* Heading */}
                <div className={poster__head}>
                  <Heading head={item.menuFor} />
                </div>

                {/* Poster */}
                <img src={item.menuPoster} alt={item.menuFor} />

              </div>
            )
          })
        }
      </div>

      {/* Section 2 - Menu Posters */}

      {/* Back Home */}
      
      <div className={go__back}>
        <BackHome/>
      </div>

      {/* Back Home */}

    </div>
  )
}

export default Menu