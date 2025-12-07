import { getProperty, getReviews } from "../src/api"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import Reviewslist from "../components/Reviews-list"
import Slider from "../components/Slider"

export default function Property(){
    const [property, setProperty] = useState()
    const [reviews, setReviews] = useState([])
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

    if (isLoading) return <p>Loading...</p>;
    if (hasErrored) return <p>Error loading property.</p>;
    if (!property) return null;

    return(
        <>
            <div className="image-slider">
                <Slider images={property.images}/>
            </div>

            <div className="info">
                <h1>{property.property_name}</h1>
                <p>{property.location}</p>
                <p>{property.price_per_night}</p>
                <p>{property.host}</p>         
            </div>

            <div className="reviews">
                <h2>Reviews:</h2>
                <Reviewslist reviews={reviews} />
            </div>
            
        </>
    )
}
