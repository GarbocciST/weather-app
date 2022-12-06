import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CantFound, SearchBar, WeatherPage } from './components';
import { getWeather } from './store';

export const ClimaApp = () => {
  const {weather, isLoading, isFound} = useSelector( state => state.clima);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather("tokio"));
  }, []);
  

  return (
    <>
      <SearchBar isLoading={isLoading}/>

      {
        (isFound === false) ?
        <CantFound />
        : 
        <WeatherPage weather={weather}/>
      }
    </>
  )
}



