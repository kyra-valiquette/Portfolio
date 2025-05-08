import AboutMe from "./AboutMe"
import Professionel from "./Professionel"
import ListeProjets from "./ListeProjets"
import './MainSection.css'

export default function MainSection({projets}){
    
    return (
        <main>
            <AboutMe/>
            <Professionel/>
            <ListeProjets projets={projets}/>
        </main>
    )
}