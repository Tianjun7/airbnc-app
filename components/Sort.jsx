import Toggle from "./Toggle"

export default function Sort({priceAsc, priceDesc}){
    return(
        <div className="Sort">
            <Toggle name="sort by">
                <button className="Price per night(desc)" htmlFor="price per night(desc)" onClick={priceDesc}>Price per night(Highest to Lowest)</button>
                <button className="Price per night(asc)" htmlFor="price per night(asc)" onClick={priceAsc}>Price per night(Lowest to Highest)</button>
            </Toggle>
        </div>
    )
}