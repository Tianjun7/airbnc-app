import Filter from "../components/Filter"
import Sort from "../components/Sort"
import Homebutton from "../components/Home-button"
import Propertylist from "../components/Property-list"
import Clearfilter from "../components/Clear-filter"
import Toggle from "../components/Toggle"
import { useState, useEffect } from "react"
import { getProperties } from "../src/api"

export default function Properties(){
    const [properties, setProperties] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasErrored, setHasErrored] = useState(null)
    const [sortBy, setSortBy] = useState("")
    const [filters, setFilters] = useState({})

    const fetchProperties = async () => {
        try{
            const properties = await getProperties(sortBy, filters)
    
            setProperties(properties)
            setIsLoading(false)
        }
        catch(err){
            setHasErrored(err)
            setIsLoading(false)
        }
    }

    const setFilterSet = (filterSet) => {
        setFilters(filterSet)
    }

    useEffect(() => {
        fetchProperties()
    },[sortBy, filters])

    return(
        <>
            <Homebutton />
            <Toggle name={"Filter Options"}>
                <Filter setFilterSet={setFilterSet}/>
                <Sort 
                priceAsc={() => {
                    setSortBy("priceASC")
                }}
                priceDesc={() => {
                    setSortBy("priceDESC")
                }}
                reset={() => {
                    setSortBy("")
                }}
                />
                <Clearfilter clear = {() => {
                    setFilters("")
                    console.log("clear")
                }}/>
            </Toggle>
            {isLoading ? <p>loading...</p>: <Propertylist properties={properties} />}
        </>
    )
}