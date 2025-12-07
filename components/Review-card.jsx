export default function Reviewcard( {review} ) {
    return(
        <>
            <h1>{review.guest}</h1>
            <p>{review.comment}</p>
        </>
    )
}