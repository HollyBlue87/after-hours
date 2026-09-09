import "./CocktailCard.css";
import { useContext } from "react";
import { FavouriteContext } from "../context/FavouriteContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

function CocktailCard(props) {
    const navigate = useNavigate();

    const favouriteContext = useContext(FavouriteContext);

    const favouritesCocktail = {
        id: props.id,
        name: props.name,
        image: props.image
    };

    const isFavourite = favouriteContext.favourites.some(
        (favourite) => favourite.id === props.id
    );
return (
    <div className="cocktail-card">
        <div className="image-area">
            <button
                className="favourite-button"
                onClick={() =>
                    isFavourite
                        ? favouriteContext.removeFavourite(favouritesCocktail)
                        : favouriteContext.addFavourite(favouritesCocktail)
                }
            >
                <FontAwesomeIcon
                    icon={isFavourite ? faHeart : faHeartRegular}
                />
            </button>

            <img
                className="cocktail-image"
                src={props.image}
                alt={props.name}
            />
        </div>

        <div className="card-content">
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
        </div>
    </div>
);
}