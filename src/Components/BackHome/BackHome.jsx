import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./BackHome.module.css";

const BackHome = () => {

    const {back__home} = styles;

  return (
    <div className={back__home}>
        <Link to="/"><ion-icon name="chevron-back"></ion-icon> <span>Home</span></Link>
    </div>
  )
}

export default BackHome