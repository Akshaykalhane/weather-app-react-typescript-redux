import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice';
import usernameReducer from './features/username/usernameSlice';
import weatherReducer from './features/weatherInfo/weatherSlice';
import weatherDataReducer from "./redux/slices/getWeatherSlice";

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        username:usernameReducer,
        weather:weatherReducer,
        weatherData:weatherDataReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;