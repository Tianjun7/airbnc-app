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
                    <label htmlFor="property-type">Property Type</label>
                    <input id="property-type" type="text"/>
                </form>
            </Toggle>
        </div>
    )
}