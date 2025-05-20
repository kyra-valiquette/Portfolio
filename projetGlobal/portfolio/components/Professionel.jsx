import './Professionel.css'
import Card from './Card'
export default function Professionel(){
    return (
        <div className="experience-professionelle" id="about">
            <h1>Expérience professionnelle</h1>
            <div className="details">
                <Card titre="Scolarité" desc={[{titre:"Diplôme", desc:"DES"}, {titre:"Études", desc:"1 an en Technique Informatique"}]}/>
                <Card titre="Emplois" desc={[{titre:"Poste", desc:"Commis d'entrepôt"}, {titre:"Poste", desc:"Technicienne en retour de marchandise"}]}/>
                <Card titre="Références" desc={[{titre:"Entreprise", desc:"Otodata"}, {titre:"Contact", desc:"+1 844-762-3344"}]}/>
            </div>
        </div>
    )
}