import Toggle from "./Toggle"

export default function Sort(){
    return(
        <div className="Sort">
            <Toggle name="sort by">
                <label className="Price per night(desc)" htmlFor="price per night(desc)">Price per night(Highest to Lowest)</label>
                <label className="Price per night(asc)" htmlFor="price per night(asc)">Price per night(Lowest to Highest)</label>
            </Toggle>
        </div>
    )
}