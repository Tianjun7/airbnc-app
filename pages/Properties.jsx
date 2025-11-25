import Filter from "../components/Filter"
import Homebutton from "../components/Home-button"
import Propertylist from "../components/Property-list"

export default function properties(){
    return(
        <>
            <Homebutton></Homebutton>
            <Filter></Filter>
            <Propertylist></Propertylist>
        </>
    )
}