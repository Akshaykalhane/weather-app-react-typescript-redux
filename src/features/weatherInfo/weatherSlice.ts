import { createSlice } from "@reduxjs/toolkit";


interface WeatherType{
    city_name:string,
    id:number,
    temp:number,
    desc:string
};

const initialState:WeatherType[]=[
    {
        id:1,
        city_name:'Arvi',
        temp:45.5,
        desc:'cloud'
    }
];

export const weatherSlice = createSlice({
    name:'weather',
    initialState,
    reducers:{
        
    }
})

export default weatherSlice.reducer;