import { useEffect, useState, useRef } from "react";
import CocktailCard from "./CocktailCard";

function FeaturedCocktails() {

    const [cocktails, setCocktails] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
            .then(response => response.json())
            .then(data => {
                const shuffled = [...data.drinks];

                shuffled.sort(() => Math.random() - 0.5);

                const selected = shuffled.slice(0, 6);

                setCocktails(selected);
            })
    }, []);

    const scrollRight = () => {
        containerRef.current.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    };

    const scrollLeft = () => {
        containerRef.current.scrollBy({
            left: -300,
            behavior: "smooth"
    });
    };


    return (
        <section className="featured-cocktails">
            <div className="section-heading">
                <span></span>
                <h2 className="featured-title">Featured Cocktails</h2>
                <span></span>
            </div>
            <div className="carousel-wrapper">

                <button onClick={scrollLeft} className="scroll-button">
                    ←
                </button>

                <div className="featured-container" ref={containerRef}>
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

                <button onClick={scrollRight} className="scroll-button">
                    →
                </button>

            </div>
        </section>
    )
}

export default FeaturedCocktails


