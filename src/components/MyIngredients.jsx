import { useState } from "react";
import CocktailCard from "./CocktailCard";
import "./MyIngredients.css"

function MyIngredients() {
    const [searchTerm, setSearchTerm] = useState("");
    const [ingredient, setIngredient] = useState([]);
    const [error, setError] = useState("");
    const [cocktails, setCocktails] = useState([]);

    function addIngredient(e) {
        setError("");
        e.preventDefault();

        if (searchTerm === "") {
            setError("Please enter an ingredient!");
            return;
        }

        if (ingredient.includes(searchTerm)) {
            setError("You've already added that ingredient!");
            return;
        }

        setIngredient([...ingredient, searchTerm]);
        setSearchTerm("");
    }

    function removeIngredient(item) {
        setIngredient(
            ingredient.filter(
                (currentIngredient) => currentIngredient !== item
            )
        );
    }

    function normalise(ingredient) {
        ingredient = ingredient.toLowerCase();

        if (ingredient.endsWith("ies")) {
            return ingredient.replace("ies", "y");
        }

        if (ingredient.endsWith("s")) {
            return ingredient.replace("s", "");
        }

        return ingredient;
    }

    async function findCocktails() {
        setError("")
        const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

        const requests = alphabet.map((letter) =>
            fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
            )
        );

        const responses = await Promise.all(requests);

        const data = await Promise.all(
            responses.map((response) => response.json())
        );

        const allCocktails = data
            .map((currentDrink) => currentDrink.drinks ?? [])
            .flat();

        const matchingCocktails = allCocktails.filter((cocktail) => {
            const cocktailIngredients = [];

            for (let i = 1; i <= 15; i++) {
                const currentIngredient = cocktail[`strIngredient${i}`];

                if (currentIngredient) {
                    cocktailIngredients.push(normalise(currentIngredient));
                }
            }

            return ingredient.every((ingredientItem) =>
                cocktailIngredients.includes(normalise(ingredientItem))
            );
        });
        if (matchingCocktails.length === 0) {
            setError("No cocktails found with those ingredients.");
            setCocktails([]);
        }
        setCocktails(matchingCocktails);
    }

    return (
    <>
        <section className="ingredients-hero">
            <div className="hero-content">
                <h1>My Ingredients</h1>
                <p className="hero-subtitle">
                    What's calling your glass tonight?
                </p>
            </div>
        </section>

        <main className="ingredients-content">

            <form onSubmit={addIngredient}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button>Add Ingredient</button>
            </form>

            <p>{error}</p>

            {ingredient.map((item) => (
                <p key={item}>
                    {item}{" "}
                    <button onClick={() => removeIngredient(item)}>
                        X
                    </button>
                </p>
            ))}

            <button onClick={findCocktails}>
                Find My Cocktails
            </button>

            {cocktails.length > 0 &&
                cocktails.map((cocktail) => {
                    return (
                        <CocktailCard
                            key={cocktail.idDrink}
                            name={cocktail.strDrink}
                            image={cocktail.strDrinkThumb}
                        />
                    );
                })
            }

        </main>
    </>
    );
}

export default MyIngredients;