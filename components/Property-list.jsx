import Propertycard from "./Property-card"

export default function Propertylist({ properties }){
    
    return (
    <div>
        <ul>
        {properties.map((property) => {
            return <Propertycard property={property} key={property.property_id}></Propertycard>
        })}
        </ul>
    </div>
    )
}