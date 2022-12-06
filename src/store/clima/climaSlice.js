
import { createSlice } from '@reduxjs/toolkit';

export const climaSlice = createSlice({
    name: 'clima',
    initialState: {
        weather: [],
        isLoading: false,
        isFound: true,
    },
    reducers: {
        setLoading: ( state ) => {
           state.isLoading = true;
        },
       
        setWeather: (state, {payload}  ) => {
           state.weather = payload;
           state.isLoading = false;
           state.isFound = true;
        },
       
        setFoundCity: ( state ) => {
            state.isLoading = false;
            state.isFound = false;
        },
    }
});

// Action creators are generated for each case reducer function
export const { setLoading, setWeather, setFoundCity } = climaSlice.actions;