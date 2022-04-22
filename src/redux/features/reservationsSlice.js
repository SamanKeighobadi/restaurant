import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState: {
    value: ["saman keighobadi"],
  },
  reducers: {
    addReservations: (state, action) => {
      if (action.payload) {
        state.value.push(action.payload);
        toast.success("Reservation made", {
          position: "bottom-right",
          autoClose: 2000,
          pauseOnHover: false,
          theme: "colored",
        });
      }
    },
    deleteReservations: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservations, deleteReservations } =
  reservationsSlice.actions;

export default reservationsSlice.reducer;
