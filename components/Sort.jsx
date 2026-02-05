export default function Sort({priceAsc, priceDesc}){
    return(
        <div className="Sort">
            <select name="sort by">
                <option className="Price per night(desc)" htmlFor="price per night(desc)" onClick={priceDesc}>Price per night(Highest to Lowest)</option>
                <option className="Price per night(asc)" htmlFor="price per night(asc)" onClick={priceAsc}>Price per night(Lowest to Highest)</option>
            </select>
        </div>
    )
}