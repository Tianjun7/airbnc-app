export default function Arrows({ prevSlide, nextSlide }) {
    console.log(1)
    return(
        <div className="arrows">
            <span className="prev" onClick={prevSlide}>
                prev
            </span>
            <span className="next" onClick={nextSlide}>
                next
            </span>
        </div>
    )
}