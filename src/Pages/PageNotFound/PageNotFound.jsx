import React from 'react'
import styles from "./PageNotFound.module.css";
import { Link } from 'react-router-dom';

const PageNotFound = () => {

  const {app__error, error__code, error__msg} = styles;

  return (
    <div className={app__error}>
      <p className={error__code}>404</p>
      <p className={error__msg}>OOPS! Page Not Found.</p>
      <Link to="/">
        <ion-icon name="chevron-back"></ion-icon> <span>Back Home</span>
      </Link>
    </div>
  );
}

export default PageNotFound;