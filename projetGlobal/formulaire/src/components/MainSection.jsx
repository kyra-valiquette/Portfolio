import './MainSection.css'
import {useState} from 'react'

export default function MainSection(){
    const [projets, setProjets] = useState([]);
    
    return (
        <form className="form" action="">
            <label htmlFor="nom">Nom du projet : </label>
            <input
                type="text"
                id="nom"
                name="nom"
                placeholder="nom du projet..."
            />
            <label htmlFor="desc">Description du projet :</label>
            <input  
                type="text"
                id="desc"
                name="desc"
                placeholder="petit site pour..."
            />
            <label htmlFor="techno">Technologie(s) utilisé(s) (Séparez les avec '/'):</label>
            <input
                type="text"
                id="techno"
                name="techno"
                placeholder="React/Google/diffSites..."
            />
            <label htmlFor="image">Image du projet :</label>
            <input
                type="file"
                id="image"
                name="image"
            />
            <label htmlFor="lien">Lien vers le projet : </label>
            <input
                type="text"
                id="lien"
                name="lien"
                placeholder="https://example.com"
            />
            <button>Soummetre</button>
        </form>
    )
}