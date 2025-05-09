import { useState, useEffect } from 'react';
import Footer from './Components/Footer';
import JokeGen from './Components/JokeGen';

export default function Api() {
    const [joke, setJoke] = useState(null);

    function genJoke() {
        fetch("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" }
        })
        .then(res => res.json())
        .then(data => setJoke(data.joke));
    }

    return (
        <>
            <JokeGen joke={joke} genJoke={genJoke} />
            <Footer />
        </>
    );
}
