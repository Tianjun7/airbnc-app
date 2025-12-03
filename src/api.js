import axios from "axios"

export const getProperties = async() => {
    const { 
            data: { properties }, 
        } = await axios.get("https://airbnc-6t74.onrender.com/api/properties")

    return properties;
} 

export const getProperty = async(id) => {
    
    console.log(id)
    const {
        data: { property },
    } = await axios.get(`https://airbnc-6t74.onrender.com/api/properties/${id}`)

    return property;
}