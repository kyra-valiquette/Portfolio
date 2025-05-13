import './AboutMe.css'
import photo from "../image/Me.jpg"
export default function AboutMe() {
    return (
        <div className="about-me" id="home">
            <img src={photo} alt="Kyra Valiquette"/>
            <div className="about-text">
                <h2>Kyra Valiquette</h2>
                <p>Développeuse passionnée souhaitant programmer des logiciels pratiques.</p>
                <ul>
                    <li>🌟 Amicale</li>
                    <li>🤝 Serviable</li>
                    <li>⚡ Apprend vite</li>
                </ul>
            </div>
        </div>
    );
}