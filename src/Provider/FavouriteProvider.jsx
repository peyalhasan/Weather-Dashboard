import { FavouriteContext } from "../Context"
import { useLocalStorage } from "../Hooks"


const FavouriteProvider = ({ children }) => {

    const [favourites, setFavourites] = useLocalStorage('Favourites', []);

    const addToFavourites = (latitude, longitude, location) => {
        setFavourites([
            ...favourites,
            {
                latitude: latitude, longitude: longitude, location: location,
            }
        ]
        )
    }

    const removeFromFavourite = (location) => {
        const restFavourite = favourites.filter((fav) => fav.location !== location);
        setFavourites(restFavourite)
    }

    return (
        <FavouriteContext.Provider value={{ favourites, addToFavourites, removeFromFavourite }}>
            {children}
        </FavouriteContext.Provider>
    )

}

export default FavouriteProvider;