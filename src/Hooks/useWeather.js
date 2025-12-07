import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../Context";



export default function useWeather() {


    const [weatherData, setWeatherData] = useState({
        location: '',
        climate: '',
        temperature: '',
        maxTemperature: '',
        minTemperature: '',
        humidity: '',
        cloudPercentage: '',
        wind: '',
        time: '',
        longitude: '',

        latitude: '',
    });

    // Loading state
    const [loading, setLoading] = useState({
        state: false,
        message: '',
    });

    // If error then error state
    const [error, setError] = useState(null);

    // Data from search 

    const { selectedLocation } = useContext(LocationContext);

    // Fetch API
    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading(
                (prev) => ({
                    ...prev,
                    state: true,
                    message: 'Fetching weather data....',
                }));

            //TODO: Make the fetchg call

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);


            // Show Error
            if (!response.ok) {
                const errorMessage = `Fetching weather data failed: ${response.status}`;
                throw new Error(errorMessage)
            }

            const data = await response.json();

            setWeatherData(
                prev => ({
                    ...prev,
                    location: data?.name,
                    climate: data?.weather[0]?.main,
                    temperature: data?.main?.temp,
                    maxTemperature: data?.main?.temp_max,
                    minTemperature: data?.main?.temp_min,
                    humidity: data?.main?.humidity,
                    cloudPercentage: data?.clouds?.all,
                    wind: data?.wind?.speed,
                    time: data?.dt,
                    longitude: longitude,
                    latitude: latitude,
                })
            )
        } catch (err) {
            setError(err)
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: '',
            })
        }
    }

    useEffect(() => {
        setLoading({
            state: true,
            message: "Finding Location...."
        })
        if (selectedLocation.latitude && selectedLocation.longitude) {
            fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude)
        } else {

            navigator.geolocation.getCurrentPosition((position) => {
                fetchWeatherData(position.coords.latitude, position.coords.longitude)
            })
        }
    }, [selectedLocation.latitude, selectedLocation.longitude])


    return {
        weatherData,
        error,
        loading,
    }
}