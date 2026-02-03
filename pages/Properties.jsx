import Filter from "../components/Filter"
import Sort from "../components/Sort"
import Homebutton from "../components/Home-button"
import Propertylist from "../components/Property-list"
import Clearfilter from "../components/Clear-filter"
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
            <Sort 
            priceAsc={() => {
                setSortBy(1)
            }}
            priceDesc={() => {
                setSortBy(2)
            }}
            />
            <Clearfilter clear = {() => {
                console.log(sortBy)
                setFilters()
                setSortBy()
                console.log("clear")
            }}/>
            {isLoading ? <p>loading...</p>: <Propertylist properties={properties} />}
        </>
    )
}