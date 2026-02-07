import Toggle from "./Toggle"
import { useState } from "react"

export default function Filter(){
    const [filterSet, setFilterSet] = useState({
        maxPrice: 0, minPrice: 0, propertyType: ""
    })
    const handleChange = (e) => {
        const value = e.target.value
        setFilterSet({
            ...filterSet,
            [e.target.name]: value
        })
        console.log(filterSet)
    }

    return(
        <>
            <Toggle>
                <label> 
                    Max Price: 
                    <input 
                    type="number"
                    name="maxPrice"
                    value={filterSet.maxPrice}
                    onChange={handleChange}
                    />
                </label>

                <label> 
                    Min Price:
                    <input 
                    type="number"
                    name="minPrice"
                    value={filterSet.minPrice}
                    onChange={handleChange}
                    />
                </label>

                <label> 
                    Property Type:
                    <input 
                    type="text"
                    name="propertyType"
                    value={filterSet.propertyType}
                    onChange={handleChange}
                    />
                </label>
            </Toggle>
        </>
    )
}