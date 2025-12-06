import Header from "./Components/Header/Header"
import WeatherBoard from "./Components/Weather/WeatherBoard"
import { WeatherProvider } from "./Provider"


function App() {

  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  )
}

export default App
