import './ListeProjets.css'
import Carousel from './Carousel'

export default function ListeProjets({projets}){
    return (
        <div className="liste-projets" id="projects">
            <h1>Mes projets</h1>
            <Carousel projets={projets}/>
        </div>
    );
}