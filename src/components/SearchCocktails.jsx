import { useState } from "react";
import CocktailCard from "./CocktailCard";
import "./SearchCocktails.css";

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
        <section className="search-hero">

          <div className="hero-content">
              <h1>Search Cocktails</h1>
              <p>What are you sipping tonight?</p>
                <div className="form-container">
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

        </section>

        <main className="search-cocktails-container">

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
                                id={cocktail.idDrink}
                                name={cocktail.strDrink}
                                image={cocktail.strDrinkThumb}
                                alcoholType={cocktail.strAlcoholic}
                                category={cocktail.strCategory}
                            />
                        );
                    })}
            </div>

        </main>
    </>
);
}

export default SearchCocktails