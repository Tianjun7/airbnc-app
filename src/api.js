import axios from "axios"

export const getProperties = async(sortBy, filters) => {
    let query = "https://airbnc-6t74.onrender.com/api/properties?"

    for(const filter in filters){
        console.log(filter)
        console.log(filters[filter])
        if(filters[filter] !== ""){
            if(query[query.length - 1] !== "?"){
                query += "&"
            }
            query += `${filter}=${filters[filter]}`
            console.log(query)
        }
    }

    const {
        data: { properties },
    } = await axios.get(query)

    return properties
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