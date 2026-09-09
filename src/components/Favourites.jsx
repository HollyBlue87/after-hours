import { useContext } from "react";
import { FavouriteContext } from "../context/FavouriteContext";
import CocktailCard from "./CocktailCard";

function Favourites() {
    const favouriteContext = useContext(FavouriteContext);
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
        <div>
            {favouriteCards}
        </div>
    );

}

export default Favourites;