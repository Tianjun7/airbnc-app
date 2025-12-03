import { getProperty, getReviews } from "../src/api"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import Images from "../components/Images"
import Reviews from "../components/Reviews-list"
import Reviewslist from "../components/Reviews-list"


export default function Property(){
    const [property, setProperty] = useState()
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasErrored, setHasErrored] = useState(null)

    const { id } = useParams();
    console.log(id)

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

    const fetchReviews = async () => {
        const reviews = await getReviews(id)

        setReviews(Array.isArray(reviews) ? reviews : []);
    }

    useEffect(() => {
        fetchProperty()
    },[])

    useEffect(() => {
        fetchReviews()
    },[id])

    console.log(reviews)

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

            <div>
                <h2>Reviews:</h2>
                <Reviewslist reviews={reviews} />
            </div>
            
        </>
    )
}
