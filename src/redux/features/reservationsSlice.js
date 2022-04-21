import {createSlice} from '@reduxjs/toolkit'

export const reservationsSlice = createSlice({
    name:"reservations",
    initialState:{
        value:[]
    },
    reducers:{
    addReservations:(state,action) =>{

    }        
    }
});

export const {addReservations} = reservationsSlice.actions;

export default reservationsSlice.reducer;
