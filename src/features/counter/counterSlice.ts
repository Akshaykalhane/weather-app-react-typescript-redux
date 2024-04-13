import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface CounterState{
    value:number
};

const initialState:CounterState={
    value:0
};

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increament:(state)=>{
            state.value+=1;
        },
        decreament:(state)=>{
            state.value-=1;
        },
        increamentByAmount:(state,action:PayloadAction<number>)=>{
            state.value+=action.payload;
        }
    }
})

export const {increament,decreament,increamentByAmount}=counterSlice.actions;

export const selectCount = (state:RootState)=>state.counter.value;

export default counterSlice.reducer;
