export default function Projet(projet){
    return (
        <div className="projet">
            <img src={projet.img} alt={projet.img != undefined ? "Image de projet" : "Il n'y a pas d'image disponible pour ce projet"}/>
            <div>
                <h3>{projet.nom}</h3>
                <p>{projet.desc}</p>
                <p>{projet.techno}</p>
                <a href={projet.lien} target="_blank">Lien vers Github</a>
            </div>
        </div>
    )
}

