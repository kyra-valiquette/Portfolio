import './Introduction.css'
import photo from "../image/moi.jpg"

export default function Introduction(){
    return (
        <div className="introduction">
            <img src={photo}/>
            <div className="bienvenu">
              <h1>Bienvenu dans mon site !</h1>
              <p>Amusez-vous à lire !</p>
            </div>
        </div>
    )
}