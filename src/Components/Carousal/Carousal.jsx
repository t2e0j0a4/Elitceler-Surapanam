import React, {useEffect, useState} from 'react'
import styles from "./Carousal.module.css";

const Carousal = ({ source, type }) => {
    
    const { app__carousal, carousal__img, carousal__fimg, carousal__simg, carousal__tips, item__tip, tip__selected } = styles;
    const [sourceLength] = useState(source.length);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {setCurrent((now) => now + 1 === sourceLength ? 0 : now + 1)}, 3000);
        return (() => clearInterval(intervalID));
        // eslint-disable-next-line
    }, [current]);

    return (
        <div className={app__carousal}>
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

        </div>
    )
}

export default Carousal
