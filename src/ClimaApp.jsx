import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { SearchBar, WeatherPage } from "./components"
import { getWeather } from "./store";

export const ClimaApp = () => {
  const {weather, isLoading} = useSelector( state => state.clima);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather("tokio"));
  }, []);
  

  return (
    <>
      <SearchBar isLoading={isLoading}/>

      <WeatherPage weather={weather} isLoading={isLoading} />
    </>
  )
}

//* Tema horario y si pinta React router dom

