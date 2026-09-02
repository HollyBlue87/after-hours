import { useState } from "react"
import { Link } from "react-router-dom"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className = "wordmark">After Hours</div>

      <button className = "menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Cocktails</Link></li>
        <li><Link to="/ingredients">Ingredients</Link></li>
        <li>Favourites</li>
      </ul>
    </nav>
  )
}

export default Navbar