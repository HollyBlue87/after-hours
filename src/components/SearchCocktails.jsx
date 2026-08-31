import { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";
import "./SearchCocktails.css";
import searchCocktailImage from "../assets/search-hero.png";

function SearchCocktails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    setError("");
    setCocktails([]);

    if (searchTerm === "") {
      setError("Please enter a cocktail name!");
      return;
    }

    setLoading(true);
    setHasSearched(true);

    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`,
      );

      const data = await response.json();

      setCocktails(data.drinks ?? []);
    } catch (error) {
      setError("Something went wrong. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <div className="search-statement">
          <span></span>
          <h2>What are you sipping tonight?</h2>
          <span></span>
      </div>
      <div className="search-intro">

        <div className="search-image">
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet={searchCocktailImageDesktop}
            />

            <img
              src={searchCocktailImageDesktop}
              alt="Glowing turquoise cocktail in a sophisticated tropical bar"
            />
          </picture>
        </div>
        <div className="search-content">
          <div className="search-heading">
            <span></span>

            <h2 className="search-title">Search For a Cocktail</h2>

            <span></span>
          </div>
          <div className="search-form-container">
            <p>Find your next favourite drink!</p>

            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>

      <div className="search-cocktails-container">
        {hasSearched && (
          <div className="search-heading">
            <span className="results-line"></span>

            <h2 className="search-title">Search Results</h2>

            <span className="results-line"></span>
          </div>
        )}

        {error !== "" && <p>{error}</p>}

        {loading && <p>Searching for cocktails...</p>}

        {hasSearched && cocktails.length === 0 && searchTerm !== "" && (
          <p>No cocktails found. Try another search.</p>
        )}
        <div className="search-results-grid">
          {cocktails.length > 0 &&
            cocktails.map((cocktail) => {
              return (
                <CocktailCard
                  key={cocktail.idDrink}
                  name={cocktail.strDrink}
                  image={cocktail.strDrinkThumb}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default SearchCocktails;
