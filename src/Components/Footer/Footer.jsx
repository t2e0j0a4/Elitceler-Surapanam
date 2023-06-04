import React from 'react'
import styles from './Footer.module.css';

import Logo from "../../Assets/SurapanamLogo.svg";

const Footer = () => {

  const { app__footer, footer__socials, app__copyright } = styles;

  return (
    <footer className={app__footer}>
      <img src={Logo} alt='Surapanam' />
      <div className={footer__socials}>
        <a href="https://www.instagram.com/surapanamhyd/" target="_blank" rel="noreferrer"><ion-icon name='logo-instagram'></ion-icon></a>
        <a href="/"><ion-icon name='logo-whatsapp'></ion-icon></a>
      </div>
      <div className={app__copyright}>
        <p>&copy; 2023 Surapanam. All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
