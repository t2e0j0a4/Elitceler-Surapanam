import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "./Navbar.module.css";
import Logo from "../../Assets/SurapanamLogo.svg";

const Navbar = () => {
  const location = useLocation();
  const { app__navbar, navbar__logo, logo__img, navbar__menu, menu__active, menu__item, item__selected, navbar__toggler } = styles;
  const [menuToggle, setMenuToggle] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = menuToggle ? 'hidden' : 'auto';
  }, [menuToggle]);

  return (
    <nav className={app__navbar}>
      <div className={navbar__logo}>
        <Link to='/'><img src={Logo} alt="Surapanam" className={logo__img}/></Link>
      </div>
      <ul className={`${navbar__menu} ${menuToggle ? menu__active: ''}`}>
        <li className={menu__item} onClick={() => {setMenuToggle(false)}} ><Link className={`${location.pathname === '/' && item__selected}`} to={'/'}>Home</Link></li>
        <li className={menu__item} onClick={() => {setMenuToggle(false)}} ><Link className={`${location.pathname === '/menu' && item__selected}`} to={'/menu'}>Menu</Link></li>
        <li className={menu__item} onClick={() => {setMenuToggle(false)}} ><Link className={`${location.pathname === '/events' && item__selected}`} to={'/events'}>Live Events</Link></li>
        <li className={menu__item} onClick={() => {setMenuToggle(false)}} ><Link className={`${location.pathname === '/aboutus' && item__selected}`} to={'/aboutus'}>About Us</Link></li>
        <li className={menu__item} onClick={() => {setMenuToggle(false)}} ><Link className={`${location.pathname === '/gallery' && item__selected}`} to={'/gallery'}>Gallery</Link></li>
      </ul>
      <div className={navbar__toggler}>
        <button type='button' onClick={() => {setMenuToggle(!menuToggle)}} ><ion-icon name={`${menuToggle ? 'close' : 'menu'}`}></ion-icon></button>
      </div>
    </nav>
  )
}

export default Navbar