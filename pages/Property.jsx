import { getProperty } from "../src/api"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import Images from "../components/Images"
import Reviews from "../components/Reviews"


export default function Property(){
    const [property, setProperty] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [hasErrored, setHasErrored] = useState(null)

    const { id } = useParams();

    const fetchProperty = async () => {
        try{
            const property = await getProperty(id)
        
            setProperty(property)
            setIsLoading(false)
        }
        catch(err){
            setHasErrored(err)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProperty()
    },[])

    if (isLoading) return <p>Loading...</p>;
    if (hasErrored) return <p>Error loading property.</p>;
    if (!property) return null;

    return(
        <>
            <div className="info">
                <h1>{property.property_name}</h1>
                <p>{property.location}</p>
                <p>{property.price_per_night}</p>
                <p>{property.host}</p>         
            </div>
            
        </>
    )
}
