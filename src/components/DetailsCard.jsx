import "./DetailsCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import cardCoverImage from "../assets/card-cover-image.webp";

function DetailsCard({ type, name, image, alcoholType, glassType, ingredients, instructions, setIsBartenderOpen, setBartenderMode, setBartenderCocktail, mode }) {

    const [isFlipped, setIsFlipped] = useState(false);

    let icon;
    let title;
    let prompt;
    let visual;

    if (type === "cocktail") {
        icon = faMartiniGlass;
        title = "COCKTAIL";
        prompt = "Tap to discover";
        visual = image;
    } else if (type === "ingredients") {
        icon = faList;
        title = "INGREDIENTS";
        prompt = "Tap to view";
        visual = cardCoverImage;
    } else if (type === "instructions") {
        icon = faBookOpen;
        title = "INSTRUCTIONS";
        prompt = "Tap to learn";
        visual = cardCoverImage;
    }
    return (
        <div
            className={`detail-card ${isFlipped ? "flipped" : ""}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="card-inner">

                <div className="card-front">
                    <img src={visual} alt={name} />

                    <div className="card-content">
                        <div className="card-icon">
                            <FontAwesomeIcon icon={icon} />
                        </div>

                        <h2>{title}</h2>
                        <p>{prompt}</p>
                    </div>
                </div>

                <div className="card-back">

                    {type === "cocktail" && (
                        <>
                            <h2>{name}</h2>

                            <p>
                                <strong>TYPE</strong>
                                <span>{alcoholType}</span>
                            </p>

                            <p>
                                <strong>GLASS</strong>
                                <span>{glassType}</span>
                            </p>
                        </>
                    )}

        {type === "ingredients" && (
            <>
                <h2>INGREDIENTS</h2>

                <ul>
                    {ingredients.map((item) => (
                        <li key={item.ingredient}>
                            {item.measurement} {item.ingredient}
                        </li>
                    ))}
                </ul>
                
                <p>Missing an ingredient? Ask the bartender for an alternative.</p>

                <button
                    className="ai-cta"
                    onClick={(e) => {
                        e.stopPropagation();
                        setBartenderMode(mode);
                        setBartenderCocktail({
                            name: name,
                            ingredients: ingredients
                        });
                        setIsBartenderOpen(true);
                    }}>
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                    Ask The Bartender
                </button>
            </>
        )}

        {type === "instructions" && (
            <>
                <h2>INSTRUCTIONS</h2>
                <p>{instructions}</p>
            </>
        )}

    </div>

            </div>
        </div>
    );
}

export default DetailsCard;