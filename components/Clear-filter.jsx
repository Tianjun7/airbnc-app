export default function Clearfilter({clear}){
    return(
        <>
            <button className="reset fiters" onClick={clear}>
                reset filters
            </button>
        </>
    )
}