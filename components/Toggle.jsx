import {useState} from "react"

export default function Toggle({ children, name }){
    const [showForm, setShowForm] =useState(false)

    return(
        <>
        {showForm ? children: null}

        <button 
                onClick={() => {
                    setShowForm((currState) => {
                        return !currState
                    })
                }}
                >
                    {name}
        </button>
        
        </>
    )
}