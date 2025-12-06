import { useContext, useEffect, useState } from 'react';
import HeartIcon from '../../assets/Heart.svg';
import RedHeartIcon from '../../assets/heart-red.svg';
import { FavouriteContext, WeatherContext } from '../../Context';


const ToggleFavourite = () => {

    const { favourites, addToFavourites, removeFromFavourite } = useContext(FavouriteContext);
    const {weatherData} = useContext(WeatherContext)

    const {latitute, longitute, location} = weatherData

    const [isFavourite, toggleFavourite] = useState(false)

    useEffect(()=>{
        const found = favourites.find((fav)=> fav.location === location);
        toggleFavourite(found);
    },[])

    function handleFourites(){
        const found = favourites.find((fav)=> fav.location === location);
        if(!found){
            addToFavourites(latitute, longitute, location)
        }else{
            removeFromFavourite(location)
        }
        toggleFavourite(!isFavourite);
        
    }

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
                
                onClick={handleFourites}>
                    <span>Add to Favourite</span>
                    <img src={isFavourite? RedHeartIcon : HeartIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default ToggleFavourite;