import { useState } from "react"
import { Link } from "react-router-dom"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="wordmark">After Hours</Link>

      <button className = "menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/search" onClick={() => setMenuOpen(false)}>Cocktails</Link></li>
        <li><Link to="/ingredients" onClick={() => setMenuOpen(false)}>Ingredients</Link></li>
        <li><Link to="/favourites" onClick={() => setMenuOpen(false)}>Favourites</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar