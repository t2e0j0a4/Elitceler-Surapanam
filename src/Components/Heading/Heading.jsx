import React from 'react'
import styles from "./Heading.module.css";

const Heading = ({head}) => {

  const {app__heading} = styles;
  return (
    <h1 className={app__heading}>{head || 'Heading'}</h1>
  )
}

export default Heading