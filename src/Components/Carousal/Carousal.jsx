import React, {useEffect, useState} from 'react'
import styles from "./Carousal.module.css";

const Carousal = ({ source, type }) => {
    
    const { app__carousal, carousal__img, carousal__fimg, carousal__simg, carousal__tips, item__tip, tip__selected, toggle__btns } = styles;
    const [sourceLength] = useState(source.length);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {setCurrent((now) => now + 1 === sourceLength ? 0 : now + 1)}, 4000);
        return (() => clearInterval(intervalID));
        // eslint-disable-next-line
    }, [current]);

    const toggleCarousal = (role) => {
        if (role === 'next') {
            setCurrent((now) => (now + 1 === sourceLength ? 0 : now + 1));
        }

        else {
            setCurrent((now) => (now === 0 ? sourceLength - 1 : now - 1));
        }
    }

    return (
        <div className={app__carousal}>

            {/* Images Show */}
            <div className={`${type === 'fullfill' ? carousal__fimg : carousal__simg} ${carousal__img}`}>
                <img src={source[current].image} alt='Carousal' />
            </div>

            {/* Image Points */}
            <div className={carousal__tips}>
                {
                    source.map((_, index) => {
                        return (
                            <span key={index} id={`tip__${index}`} className={` ${item__tip} ${current === index && tip__selected} `} onClick={() => {setCurrent(index)}} />
                        )
                    })
                }
            </div>

            {/* Togglers Buttons */}
            <div className={toggle__btns}>
                <button type='button' title='Prev' onClick={() => {toggleCarousal('prev')}} ><ion-icon name="chevron-back"></ion-icon></button>
                <button type='button' title='Next' onClick={() => {toggleCarousal('next')}} ><ion-icon name="chevron-forward"></ion-icon></button>
            </div>

        </div>
    )
}

export default Carousal
