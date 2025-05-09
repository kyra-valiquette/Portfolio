export default function JokeGen(props){
    return (
        <div className="jokeGenerator">
            <h2>DAD JOKE APP</h2>
            <p>{props.joke === null ? "No joke currently generated" : props.joke}</p>
            <button onClick={() => props.genJoke()}>Generate random</button>
        </div>
    )
}