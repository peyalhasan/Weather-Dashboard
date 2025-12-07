import Page from "./Page"
import { FavouriteProvider, WeatherProvider, LocationProvider } from "./Provider"


function App() {

  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  )
}

export default App
