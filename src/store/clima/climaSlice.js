
import { createSlice } from '@reduxjs/toolkit';

export const climaSlice = createSlice({
    name: 'clima',
    initialState: {
        weather: [],
        isLoading: false,
    },
    reducers: {
        setLoading: (state ) => {
           state.isLoading = true;
        },
       
        setWeather: (state, {payload}  ) => {
           state.weather = payload;
           state.isLoading = false;
        },
    }
});

// Action creators are generated for each case reducer function
export const { setLoading, setWeather } = climaSlice.actions;