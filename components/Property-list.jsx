export default function Propertylist({ properties }){
    
    return (
    <div>
        <ul>
        {properties.map((property) => {
            return <li key={property.property_id}>{property.property_name}</li>
        })}
        </ul>
    </div>
    )
}