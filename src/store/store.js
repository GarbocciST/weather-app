import { configureStore } from '@reduxjs/toolkit';

import { climaSlice } from './clima';


export const store = configureStore({
    reducer: {
        clima: climaSlice.reducer
    },
})