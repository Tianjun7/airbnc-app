export default function Sort({priceAsc, priceDesc, reset}){
    return(
        <div className="Sort">
            <select name="sort by">
                <option onClick={reset}>Sort by</option>
                <option className="Price per night(desc)" onClick={priceDesc}>Price per night(Highest to Lowest)</option>
                <option className="Price per night(asc)" onClick={priceAsc}>Price per night(Lowest to Highest)</option>
            </select>
        </div>
    )
}