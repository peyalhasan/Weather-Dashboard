
import { WeatherContext } from "../Context";
import { useWeather } from "../Hooks"


const WeatherProvider = ({children}) =>{
    const {weatherData, error, loading} = useWeather()
    return(
        <WeatherContext.Provider value={{weatherData, error, loading}} >
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;