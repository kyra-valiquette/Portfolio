import './MainSection.css'
import {useState} from 'react'

export default function MainSection({addProject}){
    
    return (
        <form className="form" action={addProject}>
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
            <select id="techno" name="techno" defaultValue="" required>
                <option value="" disabled>-- Selectionnez une technologie --</option>
                <option value="Angular">Angular</option>
                <option value="Backbone">Backbone</option>
                <option value="Meteor">Meteor</option>
                <option value="React">React</option>
                <option value="Others">Autre...</option>
            </select>
            <label htmlFor="image">Image du projet (Lien) :</label>
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


        