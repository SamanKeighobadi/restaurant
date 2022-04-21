import { createSlice } from "@reduxjs/toolkit";

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState: {
    value: ["saman keighobadi"],
  },
  reducers: {
    addReservations: (state, action) => {
      state.value.push(action.payload);
    },
    deleteReservations:(state,action) =>{
        state.value.splice(action.payload,1);
    }
  },
});

export const { addReservations,deleteReservations } = reservationsSlice.actions;

export default reservationsSlice.reducer;
