import './Joke.css'

export default function Joke(jokeDetails){
    
    
    return (
        <li className={jokeDetails.setup != null ? "card" : "undefined"}>
            {jokeDetails.setup != null ? 
            <>
                <h2>{jokeDetails.category} Joke:</h2>
                <p>{jokeDetails.setup}</p>
                <p>{jokeDetails.delivery}</p>
            </>
                :
                undefined
            }
        </li>
    )
}