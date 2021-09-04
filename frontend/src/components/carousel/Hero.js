import React, { useEffect, useState } from 'react';
import {sliders} from '../../data'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import './hero.css'

function Hero(props) {
    const [slider, setSliders] = useState(sliders)
    const [slideIndex, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = slider.length - 1

        if (slideIndex < 0) {
            setIndex(lastIndex)
        }
        if (slideIndex > lastIndex){
            setIndex(0)
        }

    }, [slideIndex, slider])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(slideIndex + 1)
        }, 5000);
        return () => {
            clearInterval(slider)
        }
    },[slideIndex])
    

    const movedot = index => {
        setIndex(index)
    }
    return (
        <div className="container-slider">
            {slider.map((slider, personIndex) => {
                const {id, image, title, para} = slider

                let position = 'nextSlide';
          if (personIndex === slideIndex) {
            position = 'activeSlide';
          }
          if (
            personIndex === slideIndex - 1 ||
            (slideIndex === 0 && personIndex === slider.length - 1)
          ) {
            position = 'lastSlide';
          }
                return(
                    <article className={position} key={id}>
                         <img src={image} alt="bg" />


                    </article>
                )
            })}
            <button className="prev" onClick={() => setIndex(slideIndex - 1)}>
            <FiChevronLeft />
            </button>
            <button className="next" onClick={() => setIndex(slideIndex + 1)}>
            <FiChevronRight />
             </button>
            <div className="container-dots">
                {Array.from({length: 2}).map((item, index) => (
                    <div
                    onClick={() => movedot(index + 1)}
                    className={slideIndex === index + 1 ? "active dot" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Hero;