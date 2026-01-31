import Filter from "../components/Filter"
import Sort from "../components/Sort"
import Homebutton from "../components/Home-button"
import Propertylist from "../components/Property-list"
import { useState, useEffect } from "react"
import { getProperties } from "../src/api"

export default function Properties(){
    const [properties, setProperties] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasErrored, setHasErrored] = useState(null)
    const [sortBy, setSortBy] = useState()
    const [filters, setFilters] = useState()

    const fetchProperties = async () => {
        try{
            const properties = await getProperties()
    
            setProperties(properties)
            setIsLoading(false)
        }
        catch(err){
            setHasErrored(err)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProperties()
    },[])

    return(
        <>
            <Homebutton />
            <Filter />
            <Sort />
            {isLoading ? <p>loading...</p>: <Propertylist properties={properties} />}
        </>
    )
}