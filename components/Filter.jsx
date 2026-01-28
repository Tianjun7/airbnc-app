import Toggle from "./Toggle"

export default function Filter(){
    return(
        <div className="filter">
            <Toggle name="filter">
                <form className = "filter=from">
                    <label htmlFor="max-price">Max price:</label>
                    <input id="max-price" type="text" />
                    <label htmlFor="min-price">Min price</label>
                    <input id="min-price" type="text" />
                </form>
            </Toggle>

            <Toggle name="sort by">
                <label className="Price per night(desc)" htmlFor="price per night(desc)">Price per night(Highest to Lowest)</label>
                <label className="Price per night(asc)" htmlFor="price per night(asc)">Price per night(Lowest to Highest)</label>
            </Toggle>
        </div>
    )
}