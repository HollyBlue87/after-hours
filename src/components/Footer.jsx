import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-brand">
                <Link to="/" className="footer-wordmark">
                    After Hours
                </Link>
                <p>Where The Night Begins</p>
            </div>

            <nav className="footer-nav">
                <Link to="/">Home</Link>
                <Link to="/search">Cocktails</Link>
                <Link to="/ingredients">Ingredients</Link>
                <Link to="/favourites">Favourites</Link>
            </nav>

            <p className="footer-copyright">
                © 2026 After Hours
            </p>
        </footer>
    );
}

export default Footer;