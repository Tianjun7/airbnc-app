export default function Propertylist({ properties }){
    
    return (
    <div>
        
        <ul>
        {properties.map((property) => {
            return <li key={property}>{property}</li>
        })}
        </ul>
    </div>
    )
}