import React from 'react'
import styles from "./Gallery.module.css";
import { galleryBox } from '../../Constants/PageParts';
import Heading from '../../Components/Heading/Heading';
import BackHome from '../../Components/BackHome/BackHome';

const Gallery = () => {

  const { app__gallery, gallery__box, box__image, gallery__head } = styles; 

  return (
    <div className={app__gallery}>

      {/* Gallery Heading */}
      <div className={gallery__head}>
        <Heading head={'Our Gallery'} />
      </div>

      {/* Gallery Book */}
      <div className={gallery__box}>
        {
          galleryBox.map((item) => {
            return (
              <img key={item.id} src={item.image} alt="Gallery" className={box__image} />
            )
          })
        }
      </div>
      {/* Gallery Book */}

      {/* Back Home */}

      <BackHome/>

      {/* Back Home */}
    </div>
  )
}

export default Gallery