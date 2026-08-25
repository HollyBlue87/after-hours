import { useState } from "react"
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
        <li>Home</li>
        <li>Cocktails</li>
        <li>Ingredients</li>
        <li>Favourites</li>
      </ul>
    </nav>
  )
}

export default Navbar