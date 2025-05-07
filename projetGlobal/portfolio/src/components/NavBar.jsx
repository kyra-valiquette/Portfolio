import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href="#home">Accueil</a>
                </li>
                <li>
                    <a href="#about">À propos</a>
                </li>
                <li>
                    <a href="#projects">Projets</a>
                </li>
            </ul>
        </nav>
    );
}