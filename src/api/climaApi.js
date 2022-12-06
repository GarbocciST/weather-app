import axios from "axios";

export const climaApi = axios.create ({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

// weather?q=Berisso&appid=0665ff72bf5d9dab00a3d18238bd68b9&lang=es