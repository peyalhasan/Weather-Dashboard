import Header from "./Components/Header/Header"
import WeatherBoard from "./Components/Weather/WeatherBoard"
import { FavouriteProvider, WeatherProvider, LocationProvider } from "./Provider"


function App() {

  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>

          <div className="grid place-items-center h-screen">
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </div>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  )
}

export default App
