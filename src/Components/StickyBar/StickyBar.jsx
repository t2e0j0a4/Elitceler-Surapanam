import React from 'react'
import styles from './StickyBar.module.css';

const StickyBar = () => {

  const { bottom__bar, bar__number, bar__links } = styles;

  return (
    <div className={bottom__bar}>
      <p className={bar__number}>
        <ion-icon name="call-outline"></ion-icon>
        <span>+91 9813273846</span>
      </p>
      <div className={bar__links}>
        <a href="/" target="_blank" rel="noopener" title="Whatsapp">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
        <a href="/" target="_blank" rel="noopener" title="Location">
          <ion-icon name="location-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
}

export default StickyBar