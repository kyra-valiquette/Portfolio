import './ListeProjets.css'


export default function ListeProjets(){
    return (
        <div className="liste-projets">
            <h1>Mes projets</h1>
            <div className="projet">
                <h5>titre</h5>
                <p>description</p>
                <p>technologies</p>
                <img src={undefined}/>
                <a href="https://kyra-valiquette.github.io/Portfolio/" target="_blank">Lien vers Github</a>
            </div>
        </div>
    )
}