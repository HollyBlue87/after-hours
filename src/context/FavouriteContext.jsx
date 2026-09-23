import { createContext, useState, useEffect} from "react";

const FavouriteContext = createContext();

function FavouriteProvider({ children }) {
    const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");

    if (savedFavourites) {
        return JSON.parse(savedFavourites);
        }

        return [];
    });

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

        const addFavourite = (cocktail) => {

            if (favourites.some((favourite) => favourite.id === cocktail.id)) {
                return;
            }

            setFavourites([...favourites, cocktail]);
        };

        const removeFavourite = (cocktail) => {
            setFavourites(
                favourites.filter((favourite) => favourite.id !== cocktail.id))
        }
    return (
        <FavouriteContext.Provider value={{ favourites, setFavourites, addFavourite, removeFavourite}}>
            {children}
        </FavouriteContext.Provider>
    );
}

export {FavouriteProvider, FavouriteContext };