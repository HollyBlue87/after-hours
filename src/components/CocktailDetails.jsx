import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FavouriteContext } from "../context/FavouriteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import "./CocktailDetails.css";
import "./Hero.css";
import DetailsCard from "./DetailsCard";

function CocktailDetails({ setIsBartenderOpen, setBartenderMode, setBartenderCocktail }) {

    const { id } = useParams();
    const navigate = useNavigate();
    const [cocktail, setCocktail] = useState(null);
    const [ingredients, setIngredients] = useState([]);

        const { favourites, addFavourite, removeFavourite } = useContext(FavouriteContext);
    const isFavourite = favourites.some(
        (favourite) => favourite.id === cocktail?.idDrink
    );

    const handleFavourite = () => {
        const favouriteCocktail = {
            id: cocktail.idDrink,
            name: cocktail.strDrink,
            image: cocktail.strDrinkThumb,
            alcoholType: cocktail.strAlcoholic,
            category: cocktail.strCategory
        };

        if (isFavourite) {
            removeFavourite({ id: cocktail.idDrink });
        } else {
            addFavourite(favouriteCocktail);
        }
    };

    useEffect(() => {

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data => {

                const cocktailData = data.drinks[0];

                const ingredients = [];

                for (let i = 1; i <= 15; i++) {
                    const ingredient = cocktailData[`strIngredient${i}`];
                    const measurement = cocktailData[`strMeasure${i}`];

                    if (ingredient) {
                        ingredients.push({
                            ingredient: ingredient,
                            measurement: measurement
                        });
                    }
                }

                setCocktail(cocktailData);
                setIngredients(ingredients);
            });

    }, [id]);

    return (
        cocktail && (
            <>
                <button
                    className="back-button"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>

                <button
                    className="details-favourite-button"
                    onClick={handleFavourite}
                    aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
                >
                    <FontAwesomeIcon icon={isFavourite ? faHeart : faHeartRegular} />
                </button>

                <div className="card-container">
                <DetailsCard
                    type="cocktail"
                    name={cocktail.strDrink}
                    image={cocktail.strDrinkThumb}
                    alcoholType={cocktail.strAlcoholic}
                    glassType={cocktail.strGlass}
                />

                <DetailsCard
                    type="ingredients"
                    name={cocktail.strDrink}
                    ingredients={ingredients}
                    setIsBartenderOpen={setIsBartenderOpen}
                    setBartenderMode={setBartenderMode}
                    setBartenderCocktail={setBartenderCocktail}
                    mode="missing"
                />

                <DetailsCard
                    type="instructions"
                    instructions={cocktail.strInstructions}
                />
            </div>
        </>
    )
)};

export default CocktailDetails;



