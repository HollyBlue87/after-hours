import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import "./CocktailDetails.css";
import "./Hero.css";

function CocktailDetails() {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);
    const [ingredients, setIngredients] = useState([]);

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
        <>
            {cocktail && (
            <div className="cocktail-details">
                <div className="detail-heading">
                <span></span>
                    <h1>{cocktail.strDrink}</h1> 
                <span></span>
                </div>

                <div className="recipe-layout">

                    <div className="recipe-image">
                        <img
                            src={cocktail.strDrinkThumb}
                            alt={cocktail.strDrink}
                        />
                    </div>

                    <div className="recipe-info">
                        <section>
                            <div className="detail-heading">
                                <span></span>
                                <h2>Ingredients</h2>
                                <span></span>
                            </div>
                            <ul>
                                {ingredients.map((ingredient) => (
                                    <li key={ingredient.ingredient}>
                                        {ingredient.ingredient} • <span>{ingredient.measurement}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="alternative-ingredients">
                            <p>Missing an ingredient?</p>
                            <p>Ask The Bartender for a suitable alternative.</p>

                            <button className="ai-cta">
                                <FontAwesomeIcon icon={faWandMagicSparkles} />
                                Ask The Bartender
                            </button>
                        </div>
                    </div>
                    <section className="instructions">
                        <div className="detail-heading">
                            <span></span>
                            <h2>Instructions</h2>
                            <span></span>
                        </div>

                        <p>{cocktail.strInstructions}</p>
                    </section>
                </div>

            </div>
            )}
        </>
    );
}

export default CocktailDetails;



