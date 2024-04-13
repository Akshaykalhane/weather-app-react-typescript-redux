import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherData } from "../api/weather";
import { updateLoading } from "./slices/getWeatherSlice";


export const fetchData = createAsyncThunk('weather/fetchData',async(city_name:string,{dispatch,rejectWithValue,fulfillWithValue})=>{
    try{
        const res = await fetchWeatherData(city_name)
        dispatch(updateLoading(true))
        if(res.cod===200){
            console.log('req ok')
            dispatch(updateLoading(false))
            return res;
            
        }
        // console.log(res)
        return rejectWithValue(res.message);
        
    }catch(err:any){
        return rejectWithValue('Failed to Fetch Data');
    }
})