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
                    maxPrice
                    <input 
                    type="text"
                    name="maxPrice"
                    value={filterSet.maxPrice}
                    onChange={handleChange}
                    />
                </label>
            </Toggle>
        </>
    )
}