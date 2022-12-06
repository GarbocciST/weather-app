import { climaApi } from '../../api';
import { setLoading, setWeather, setFoundCity } from './';



export const getWeather = (value ) => {
    return async(dispatch, getState) => {
        try {
            dispatch(setLoading());
    
            const {data} = await climaApi.get(`weather?q=${value}&appid=0665ff72bf5d9dab00a3d18238bd68b9&lang=es`);
            
            dispatch(setWeather([data]));
            

        } catch (error) {
            dispatch(setFoundCity());
            throw new Error(`No se puede cargar el clima en ${value}`);

        }
    }
}

//* Catch algun popup
//* weather por forecast