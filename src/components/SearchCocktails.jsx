import { useState } from "react";
import CocktailCard from "./CocktailCard";
import "./SearchCocktails.css";
import searchCocktailImage from "../assets/search-hero.png";

function SearchCocktails () {

    const [searchTerm, setSearchTerm] = useState("");
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async(e) => {
        e.preventDefault();

        setError("");
        setCocktails([]);

        if (searchTerm === "") {
            setError("Please enter a cocktail name!")
            return
        }

    setLoading(true);
    setHasSearched(true);

    try {
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
    
        const data = await response.json();

        setCocktails(data.drinks ?? []);
    }
    catch (error) {
        setError("Something went wrong. Please try again");
    }

    finally {
        setLoading(false);
    }
    
    }

    return(
        <>
            <div className="search-intro">

            <div className="search-image">
            <img
                src={searchCocktailImage}
                alt="Glowing turquoise cocktail in a sophisticated tropical bar"
             />
            </div>

            <div className="search-content">
                <h1>Search For a Cocktail</h1>
                <p>Find your next favourite drink!</p>

                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>

        <div className="search-cocktails-container">

            {error !== "" && (
                <p>{error}</p>
            )}

            {loading && (
                <p>Searching for cocktails...</p>
            )}

            {hasSearched && cocktails.length === 0 && searchTerm !== "" && (
                <p>No cocktails found. Try another search.</p>
            )}
            {cocktails.length > 0 && (
                cocktails.map(cocktail => {
                    return (
                        <CocktailCard
                            key={cocktail.idDrink}
                            name={cocktail.strDrink}
                            image={cocktail.strDrinkThumb}
                        />
                    )
                })
            )}
        </div>
    </>
    )
}

export default SearchCocktails