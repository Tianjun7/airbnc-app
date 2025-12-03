export default function Reviewcard( {review} ) {
    console.log(review)
    return(
        <>
            <h1>{review.guest}</h1>
            <p>{review.comment}</p>
        </>
    )
}