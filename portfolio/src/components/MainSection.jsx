import AboutMe from "./AboutMe"
import Professionel from "./Professionel"
import ListeProjets from "./ListeProjets"
import './MainSection.css'
import {useState} from 'react'

export default function MainSection(){
    const [projets, setProjets] = useState([]);
    
    return (
        <main>
            <AboutMe/>
            <Professionel/>
            <ListeProjets/>
        </main>
    )
}