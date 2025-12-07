import { useContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import { WeatherContext } from "./Context";

import ClearSkyImage from './assets/backgrounds/clear-sky.jpg'
import MistImage from './assets/backgrounds/mist.jpeg'
import RainyDayImage from './assets/backgrounds/rainy-day.jpg'
import ScatteredCloudsImage from './assets/backgrounds/scattered-clouds.jpg'
import SnowImage from './assets/backgrounds/snow.jpg'
import ThunderStormImage from './assets/backgrounds/thunderstorm.jpg'
import WinterImage from './assets/backgrounds/winter.jpg'
import FewCloudsImage from './assets/backgrounds/few-clouds.jpg'


const Page = () => {
    const { weatherData, loading } = useContext(WeatherContext);
    const { climate } = weatherData;

    const [climateImage, setClimateImage] = useState('');

    function getBackgroundImage(climate) {
        switch (climate) {
            case 'Rain':
                return RainyDayImage;
            case 'Clouds':
                return ScatteredCloudsImage;
            case 'Haze':
                return FewCloudsImage;
            case 'Clear':
                return ClearSkyImage;
            case 'Snow':
                return SnowImage;
            case 'Thunder':
                return ThunderStormImage;
            case 'Fog':
                return WinterImage;

            default:
                return ClearSkyImage;
        }
    }
    useEffect(() => {
        const bgImage = getBackgroundImage(climate)
        setClimateImage(bgImage)
    }, [climate])

    return (
        <>{
            loading.state ? (
                <p>{loading.message}</p>
            ) : (

                <div
                style={{backgroundImage: `url('${climateImage}')` }} className="grid place-items-center h-screen bg-no-repeat bg-cover">
                    <Header />
                    <main>
                        <section>
                            <WeatherBoard />
                        </section>
                    </main>
                </div >
            )
        }

        </>
    );
};

export default Page;