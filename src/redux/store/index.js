import {configureStore} from '@reduxjs/toolkit'
import reservationsReducer from '../features/reservationsSlice' 
import customerReducer from '../features/customerSlice'

export const store = configureStore({
    reducer:{
        reservations:reservationsReducer,
        customer: customerReducer
    }
});