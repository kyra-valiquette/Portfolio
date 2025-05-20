import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {

    return (
        <nav className="navbar1">
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/portfolio">Voir le portfolio</Link>
                </li>
                <li>
                    <Link to="/formulaire">Ajouter un projet</Link>
                </li>
                <li>
                    <Link to="/api">API joke generator</Link>
                </li>
            </ul>
        </nav>
    );
}