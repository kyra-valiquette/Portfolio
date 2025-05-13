import './JokeGen.css'
import Joke from './Joke'
export default function JokeGen({jokes, categoryFilter}){
    const jokesFilter = jokes.filter(joke => 
        (categoryFilter === "All" || joke.category === categoryFilter));
    
    return (
        <ul className="joke-list">
            {jokesFilter.map((joke, index) => (
                <Joke key={index} category={joke.category} setup={joke.setup} delivery={joke.delivery}/>
            ))}
        </ul>
    )
}