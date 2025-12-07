import { useEffect, useState } from "react"
import Dots from "./Dots"
import SliderContent from "./SliderContent"
import Arrows from "./Arrows"
import "./slider.css"

export default function Slider( {images} ){
    const[activeIndex, setActiveIndex] = useState(0)
    const len = images.length - 1

    return(
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} sliderImage={images} />
            <Arrows 
                prevSlide={() => 
                    setActiveIndex(activeIndex < 1 ? len: activeIndex - 1)
                }
                nextSlide={() => 
                    setActiveIndex(activeIndex === len ? 0: activeIndex + 1)
                }
            />
            <Dots 
            activeIndex={activeIndex} 
            sliderImages={ images }
            onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}