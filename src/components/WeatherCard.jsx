import moment from 'moment/moment';

export const WeatherCard = ({city}) => {
  return (

    <div className="card-body d-flex mt-5">
        <div className="m-2 text-white">
            <h4>{city.name} {moment.unix(city.dt).format("hh:mm") }</h4>
            <p>Pais: {city.sys.country}</p>
            <img className=" card-img w-25" src={`../src/assets/${city.weather[0].icon}.png`} alt={city.weather[0].main} />
        </div>
        
        <div className="estados text-white">             
            <h4>{moment.unix(city.dt).format("DD/MM/YYYY")}</h4>
            <p>GMT: {city.timezone / 3600}</p>
            <p>Tiempo: {city.weather[0].description}</p>
            <p>Vel del viento: {Math.round(city.wind.speed * 3.6)} km/h</p>
        </div> 

        <div className="temperaturas text-dark">
            <p>Temperatura: {Math.round(city.main.temp - 273.15) }°C</p>
            <p>T.Max: {Math.round(city.main.temp_max - 273.15) }°C</p>
            <p>T.Min: {Math.round(city.main.temp_min - 274.15) }°C</p>
            <p>Humedad: {city.main.humidity}%</p>
        </div>

    </div>
    
  )
}

// ../src/assets/${city.weather[0].main}.png