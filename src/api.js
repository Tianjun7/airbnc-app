import axios from "axios"

export const getProperties = async(sortBy) => {
    if(sortBy.length === 0){
        const { 
            data: { properties }, 
        } = await axios.get("https://airbnc-6t74.onrender.com/api/properties")
        console.log(1)

        return properties;
    }
    else if(sortBy === "priceASC"){
        const { 
            data: { properties }, 
        } = await axios.get("https://airbnc-6t74.onrender.com/api/properties?sortby=price_per_night&order=ASC")
        console.log(2)

        return properties;
    }
    else if(sortBy === "priceDESC"){
        const { 
            data: { properties }, 
        } = await axios.get("https://airbnc-6t74.onrender.com/api/properties?sortby=price_per_night&order=DESC")
        console.log(3)

        return properties;
    }
} 

export const getProperty = async(id) => {
    const {
        data: { property },
    } = await axios.get(`https://airbnc-6t74.onrender.com/api/properties/${id}`)

    return property;
}

export const getReviews = async(id) => {
    const{
        data: { reviews },
    } = await axios.get(`https://airbnc-6t74.onrender.com/api/properties/${id}/reviews`)

    return reviews;
}