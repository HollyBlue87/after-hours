import { useContext } from "react";
import { FavouriteContext } from "../context/FavouriteContext";
import CocktailCard from "./CocktailCard";
import "./Favourites.css";

function Favourites() {
    const favouriteContext = useContext(FavouriteContext);
    const hasFavourites = favouriteContext.favourites.length > 0;
    const favouriteCards = favouriteContext.favourites.map((favourite) => {
    return (
        <CocktailCard
            id={favourite.id}
            name={favourite.name}
            image={favourite.image}
            isFavourite
        />
    )
});

    return (
        <div className="favourites-wrapper">
        <div className="favourites-heading">
            <span className="favourites-line"></span>

            <h1 className="favourites-title">My Favourites</h1>

            <span className="favourites-line"></span>
        </div>

        <div className="favourites-page">
            {hasFavourites ? (
                favouriteCards
            ) : (
                <div className="empty-favourites">
                    <h2>No favourites yet</h2>
                    <p>Find a cocktail you love and save it here.</p>
                </div>
            )}
        </div>
        </div>
    );

}

export default Favourites;