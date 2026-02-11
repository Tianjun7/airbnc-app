import Toggle from "./Toggle"
import { useState } from "react"

export default function Filter({ setFilterSet }){
    const [maxPrice, setMaxPrice] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [property_type, setproperty_type] = useState("")

    const handleChange = (e) => {
        if(e.target.name === "maxPrice"){
            setMaxPrice(e.target.value)
        }
        else if(e.target.name === "minPrice"){
            setMinPrice(e.target.value)
        }
        else if(e.target.name === "property_type"){
            setproperty_type(e.target.value)
        }
    }

    return(
        <>
            <label> 
                Max Price: 
                <input 
                type="number"
                name="maxPrice"
                value={maxPrice}
                onChange={handleChange}
                />
            </label>

            <label> 
                Min Price:
                <input 
                type="number"
                name="minPrice"
                value={minPrice}
                onChange={handleChange}
                />
            </label>

            <label> 
                Property Type:
                <input 
                type="text"
                name="property_type"
                value={property_type}
                onChange={handleChange}
                />
            </label>

            <button onClick={() => {
                setFilterSet({
                    maxPrice: maxPrice,
                    minPrice: minPrice,
                    property_type: property_type
                })
                console.log([maxPrice, minPrice, property_type])
            }}>Apply Filters</button>
        </>
    )
}