import Toggle from "./Toggle"
import { useState } from "react"

export default function Filter(){
    const [maxPrice, setMaxPrice] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [propertyType, setPropertyType] = useState("")

    const handleChange = (e) => {
        if(e.target.name === "maxPrice"){
            setMaxPrice(e.target.value)
            console.log(maxPrice)
        }
        else if(e.target.name === "minPrice"){
            setMinPrice(e.target.value)
            console.log(minPrice)
        }
        else if(e.target.name === "propertyType"){
            setPropertyType(e.target.value)
            console.log(propertyType)
        }
    }

    return(
        <>
            <Toggle>
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
                    name="propertyType"
                    value={propertyType}
                    onChange={handleChange}
                    />
                </label>
            </Toggle>
        </>
    )
}