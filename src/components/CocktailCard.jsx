import "./CocktailCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"

function CocktailCard(props) {
    return (
        <div className="cocktail-card">
            <div className="image-area">
                <button className="favourite-button"><FontAwesomeIcon icon={faHeart} /></button>
                <img className="cocktail-image" src={props.image} alt={props.name}/>
            </div>
            <div className="card-content">
                <div className="cocktail-title">
                    <h3 className="cocktail-name">{props.name}</h3>
                </div>
                <p className="alcohol-status">{props.alcoholType}</p>
                <p className="drink-category">{props.category}</p>
                <button className="view-cocktail">View Cocktail</button>
            </div>
        </div>
    )
}

export default CocktailCard