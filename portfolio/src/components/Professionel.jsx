import './Professionel.css'

export default function Professionel(){
    return (
        <div className="experience-professionelle">
            <h1>Expérience professionnelle</h1>
            <div className="details">
                <div className="card">
                    <h2>Scolarité</h2>
                    <ul>
                        <li><strong>Diplôme:</strong> DES</li>
                        <li><strong>Études:</strong> 1 an en Technique Informatique</li>
                    </ul>
                </div>
                
                <div className="card">
                    <h2>Emplois</h2>
                    <ul>
                        <li><strong>Poste:</strong> Commis d'entrepôt</li>
                        <li><strong>Poste:</strong> Technicienne en retour de marchandise</li>
                    </ul>
                </div>
                
                <div className="card">
                    <h2>Références</h2>
                    <ul>
                        <li><strong>Entreprise:</strong> Otodata</li>
                        <li><strong>Contact:</strong> +1 844-763-3344</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}