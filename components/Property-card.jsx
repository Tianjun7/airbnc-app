import { Link } from "react-router"

export default function Propertycard({ property }){
    
    const propertyLink = `/properties/${property.property_id}`
    return(
        <>
            <div className="image">
                <img src={property.image} />
            </div>
            <div className="property-info">
                <Link to={propertyLink}>{property.property_name}</Link>
                <p>{property.price_per_night}</p>
                <p>{property.location}</p>
            </div>
        </>
    )
}