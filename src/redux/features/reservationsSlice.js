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
  },
});

export const { addReservations } = reservationsSlice.actions;

export default reservationsSlice.reducer;
