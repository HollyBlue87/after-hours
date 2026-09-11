import "./Hero.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons"
import { faLeaf } from "@fortawesome/free-solid-svg-icons"
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons"

function Hero({ setIsBartenderOpen }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-copy">
                    <h1 className="hero-title">After Hours</h1>
                    <p className="hero-subtitle">Where The Night Begins</p>
                    <p className="hero-intro">Discover classic cocktails, 
                        unexpected favourites and new drinks worth staying up for.</p>
                </div>

                <div className="hero-actions">
                    <button className="primary-cta">
                        <FontAwesomeIcon icon={faMartiniGlass} />
                        Find A Cocktail
                        </button>
                    <button className="secondary-cta">
                        <FontAwesomeIcon icon={faLeaf} />
                        My Ingredients
                        </button>
                    <button className="ai-cta" onClick={() => setIsBartenderOpen(true)}>
                        <FontAwesomeIcon icon={faWandMagicSparkles} />
                        Ask The Bartender
                        </button>
                </div>
            </div>
        </section>
    )
}

export default Hero

