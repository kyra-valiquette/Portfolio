import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/formulaire">Ajouter un projet</Link>
                </li>
                <li>
                    <Link to="/portfolio">Voir le portfolio</Link>
                </li>
            </ul>
        </nav>
    );
}