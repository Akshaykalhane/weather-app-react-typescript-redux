import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeatherData } from "../types/types";
import { fetchData } from "../getWeatherData";

export type StateType={
    weatherData:WeatherData,
    isLoading:boolean,
    isError:string,
    city_data:WeatherData[],
    city_status:string
}

const weatherData={
    coord: {
        lon: 0,
        lat: 0
    },
    weather: [
        {
            id: 0,
            main: "",
            description: "",
            icon: ""
        }
    ],
    base: "",
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0
    },
    visibility: 0,
    wind: {
        speed: 0,
        deg: 0,
        gust: 0
    },
    rain: { "1h": 0 },
    clouds: { all: 0 },
    dt: 0,
    sys: {
        type: 0,
        id: 0,
        country: "",
        sunrise: 0,
        sunset: 0
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0
}



const initialState:StateType = {
    weatherData:weatherData,
    isLoading:false,
    isError:'',
    city_data:[],
    city_status:''        
}

export const getWeatherSlice = createSlice({
    name:'weatherData',
    initialState,
    reducers:{
        updateLoading:(state,action:PayloadAction<boolean>)=>{
            state.isLoading=action.payload;
        },
        addCity:(state,action:PayloadAction<WeatherData>)=>{
            if(state.city_data.length>0){
                let flag = state.city_data.some(item=>item.id==action.payload.id)
                if(!flag){
                    state.city_data.push(action.payload)
                    state.city_status='Added'
                }else{
                    state.city_status='City already added'
                }
            }else{
                state.city_data.push(action.payload)
                state.city_status='Added';
            }
        }
    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchData.fulfilled,(state,action:PayloadAction<WeatherData>)=>{
            state.weatherData=action.payload;
            // state.city_data.push(action.payload);
            state.isError='';
            state.isLoading=false;
            state.city_status=''
        })
        .addCase(fetchData.rejected,(state,action:any)=>{
            state.isError=action.payload;
            state.weatherData=weatherData;
            state.isLoading=false;
        })
    },
})

export const {updateLoading,addCity}=getWeatherSlice.actions;

export default getWeatherSlice.reducer;
