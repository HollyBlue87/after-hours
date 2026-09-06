import { createContext, useState, useContext} from "react";

const FavouriteContext = createContext();

function FavouriteProvider({ children }) {
    const [favourites, setFavourites] = useState([])

        const addFavourite = (cocktail) => {

            if (favourites.some((favourite) => favourite.id === cocktail.id)) {
                return;
            }

            setFavourites([...favourites, cocktail]);
        };
    return (
        <FavouriteContext.Provider value={{ favourites, setFavourites, addFavourite }}>
            {children}
        </FavouriteContext.Provider>
    );
}

export {FavouriteProvider, FavouriteContext };