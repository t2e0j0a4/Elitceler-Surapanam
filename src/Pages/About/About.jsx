import React from 'react'
import styles from "./About.module.css";
import Carousal from '../../Components/Carousal/Carousal';
import Heading from '../../Components/Heading/Heading';
import BackHome from '../../Components/BackHome/BackHome';
import { aboutLanding } from '../../Constants/Carousal';
 
const About = () => {

  const {app__about, about__carousal, about__description, description, go__back} = styles;

  return (
    <div className={app__about}>

      {/* Section 1 - Carousal */}

      <div className={about__carousal}>
        <Carousal source={aboutLanding} type="fullfill" />
      </div>

      {/* Section 1 - Carousal */}

      {/* Section 2 - About Us Description */}

      <div className={about__description}>
        <Heading head={'About Us'} />
        <div className={description}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      {/* Section 2 - About Us Description */}

      {/* Back Home */}

      <div className={go__back}>
        <BackHome/>
      </div>

      {/* Back Home */}

    </div>
  )
}

export default About