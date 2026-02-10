import axios from "axios"

export const getProperties = async(sortBy, filters) => {
    const query = "https://airbnc-6t74.onrender.com/api/properties"

    if(filters.maxPrice !== ''){
        query += `?maxPrice=${filters.maxPrice}`
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