import { useState } from 'react';
import SearchImage from '../../assets/search.svg'
import getLocationByName from '../../Data/location-data';
const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form action="#" onSubmit={handleSubmit} >
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                    <img src={SearchImage} />
                </button>
            </div>
        </form>
    );
};

export default Search;