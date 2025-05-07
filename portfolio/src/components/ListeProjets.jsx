import './ListeProjets.css'


export default function ListeProjets(){
    return (
        <div className="liste-projets">
            <h1>Mes projets</h1>
            <div className="projet">
                <img src="https://parametric-architecture.com/wp-content/uploads/2024/08/Architecture-Portfolio-Cover.webp" alt="Image de projet"/>
                <div>
                    <h3>titre</h3>
                    <p>description</p>
                    <p>technologies</p>
                    <a href="https://kyra-valiquette.github.io/Portfolio/" target="_blank">Lien vers Github</a>
                </div>
            </div>
        </div>
    );
}
