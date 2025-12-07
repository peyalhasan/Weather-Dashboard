import { useContext } from 'react';
import SearchImage from '../../assets/search.svg'
import getLocationByName from '../../Data/location-data';
import { LocationContext } from '../../Context';
import { useDebounce } from '../../Hooks';
const Search = () => {


    const { setSelectedLocation } = useContext(LocationContext)

    
    const doSearch = useDebounce(async (term)=>{
         const fetchedLocation = await getLocationByName(term);
        setSelectedLocation({ ...fetchedLocation })
    },3000)

    function handleChange(e){
        const value = e.target.value;
        doSearch(value)
    }

    return (
        <form action="#"  >
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required
                    onChange={handleChange}
                />
                <button type="submit">
                    <img src={SearchImage} />
                </button>
            </div>
        </form>
    );
};

export default Search;