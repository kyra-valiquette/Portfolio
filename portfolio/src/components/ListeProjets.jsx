export default function ListeProjets(){
    return (
        <div className="liste-projets">
            <h3>Mes projets</h3>
            <div className="projet">
                <h5>titre</h5>
                <p>description</p>
                <p>technologies</p>
                <img src={undefined}/>
                <a href="https://google.com" target="_blank">Lien vers Github</a>
            </div>
        </div>
    )
}