import { WeatherCard } from "./WeatherCard"


export const WeatherPage = ({weather, isLoading}) => {
  return (
    <div className="fondo container rounded">
      <ul className=" d-flex justify-content-around">
        {
          weather.map( city => (
            <WeatherCard city={city} key={city.id}/>
          ))
        }
      </ul>
    </div>
  )
}

// src={`../assets/${city.weather[0].main}.png`}