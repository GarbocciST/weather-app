import { WeatherCard } from './WeatherCard';


export const WeatherPage = ({weather}) => {
  return (
    <div className="fondo container rounded">
      <ul className="d-flex justify-content-around">
        {
          weather.map( city => (
            <WeatherCard city={city} key={city.id}/>
          ))
        }
      </ul>
    </div>
  )
}

