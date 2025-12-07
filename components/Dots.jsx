export default function Dots({ activeIndex, onClick, sliderImages}){
    return(
        <div className="all-dots">
            {sliderImages.map((slide,index) => (
                <span key={index} 
                className={`${activeIndex === index ? "dot active-dot": "dot" }`} 
                onClick={() => onClick(index)}
                ></span>
            ))}
        </div>
    )
}