import Reviewcard from "./Review-card"

export default function Reviewslist( {reviews} ) {
    return(
        <ul>
            {reviews.map((review) => {
                return <Reviewcard review={review} key={review.review_id}/>
            })}

        </ul>
    )
}