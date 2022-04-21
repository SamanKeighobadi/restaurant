import {createSlice} from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name:"customer",
    initialState:{
        value:[]
    },
    reducers:{
        addCustomer:(state,action) =>{
            state.value.push(action.payload)
        }
    }
});

export const {addCustomer} = customerSlice.actions


export default customerSlice.reducer;