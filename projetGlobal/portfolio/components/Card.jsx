import './Card.css'

export default function Card({ titre, desc }){
    return (
        <div className="card">
            <h2>{titre}</h2>
            <ul>
                {desc.map((thing, index) => <li key={index}><strong>{thing.titre}: </strong>{thing.desc}</li>)}
            </ul>
        </div>
    )
}