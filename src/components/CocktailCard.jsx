import "./CocktailCard.css";
import { useContext, useState } from "react";
import { FavouriteContext } from "../context/FavouriteContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

function CocktailCard(props) {
    const navigate = useNavigate();
    const [isFlipped, setIsFlipped] = useState(false);
    const [ingredients, setIngredients] = useState([]);

    

    const favouriteContext = useContext(FavouriteContext);

    const favouritesCocktail = {
        id: props.id,
        name: props.name,
        image: props.image
    };

    const isFavourite = favouriteContext.favourites.some(
        (favourite) => favourite.id === props.id
    );

    const fetchIngredients = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`)
            .then(response => response.json())
            .then(data => {
                const cocktail = data.drinks[0];
                const ingredients = [];

                for (let i = 1; i <= 15; i++) {
                    const ingredient = cocktail[`strIngredient${i}`];
                    const measurement = cocktail[`strMeasure${i}`];

                    if (ingredient) {
                        ingredients.push({
                            ingredient: ingredient,
                            measurement: measurement
                        });
                    }
                }

                setIngredients(ingredients);
            });
    };
return (
    <div
        className={`cocktail-card ${isFlipped ? "flipped" : ""}`}
        onClick={() => {
            if (!isFlipped) {
                fetchIngredients();
            }

            setIsFlipped(!isFlipped);
        }}
    >
        <div className="cocktail-card-inner">

            <div className="cocktail-card-front">

                <div className="image-area">
                    <button
                        className="favourite-button"
                        aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
                        onClick={(e) => {
                            e.stopPropagation();

                            isFavourite
                                ? favouriteContext.removeFavourite(favouritesCocktail)
                                : favouriteContext.addFavourite(favouritesCocktail)
                        }}
                    >
                        <FontAwesomeIcon
                            icon={isFavourite ? faHeart : faHeartRegular}
                        />
                    </button>

                    <img
                        className="cocktail-image"
                        src={`${props.image}/medium`}
                        alt={props.name}
                    />
                </div>

                <div className="card-content">
                    <div className="card-icon">
                        <FontAwesomeIcon icon={faMartiniGlass} />
                    </div>
                    <div className="cocktail-title">
                        <h3 className="cocktail-name">{props.name}</h3>
                    </div>

                    <p className="alcohol-status">{props.alcoholType}</p>
                    <p className="drink-category">{props.category}</p>

                    <button
                        className="view-cocktail"
                        onClick={() => navigate(`/cocktail/${props.id}`)}
                    >
                        View Cocktail
                    </button>

                    <p className="flip-prompt">Tap to view ingredients</p>
                </div>

            </div>

            <div className="cocktail-card-back">
                <h3>{props.name}</h3>

                 <ul>
                    {ingredients.map((item, index) => (
                        <li key={`${item.ingredient}-${index}`}>
                            {item.measurement} {item.ingredient}
                        </li>
                    ))}
                </ul>

                <p className="flip-prompt">Tap to return</p>
            </div>

        </div>
    </div>
);
}

export default CocktailCard;