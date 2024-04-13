import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface Username{
    username:string
}

const initialState:Username={
    username:''
}

const usernameSlice=createSlice({
    name:'username',
    initialState,
    reducers:{
        addusername:(state,action:PayloadAction<string>)=>{
            state.username=action.payload;
        }
    }
})

export const { addusername}=usernameSlice.actions;

export default usernameSlice.reducer;