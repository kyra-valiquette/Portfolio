import React, { useState, useEffect } from "react";
import JokeGen from './Components/JokeGen'
import './Api.css'
const Api = () => {
    const [jokes, setJokes] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("All");

    function fetchJokes() {
        fetch("https://v2.jokeapi.dev/joke/Any?amount=20")
            .then(res => res.json())
            .then(data => {
                setJokes(prevJokes => [...prevJokes, ...data.jokes]);
            })
    }
    
    useEffect(() => {
        fetchJokes();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Aidé par copilot pour load pendant qu'on scroll
    }, []);  

    function handleScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) { // Aidé par copilot pour load pendant qu'on scroll
            fetchJokes();
        }
    }

    return (
        <div className="gen">
            <h1>Find your joke !</h1>
            
            <select onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="All">Toutes les catégories</option>
                <option value="Programming">Programmation</option>
                <option value="Misc">Varier</option>
                <option value="Dark">Humour noir</option>
                <option value="Pun">Meme</option>
                <option value="Spooky">Épeurant</option>
                <option value="Christmas">Noel</option>
            </select>
            <JokeGen jokes={jokes} categoryFilter={categoryFilter}/>
        </div>
    );
};

export default Api;
