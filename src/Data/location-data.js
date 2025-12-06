

const getLocationByName = async(location) =>{
    if(!location) return null;

    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`);
    const data = await response.json();
    
    const filtered = data.results.filter(item=> item.name === location);
    if(filtered.lenght > 0){
        return filtered[0]
    }else{
        const defaultLocation = {
            location: '',
            latitude: 0,
            longitude: 0,
        }
        return defaultLocation
    }
}

 export default getLocationByName;