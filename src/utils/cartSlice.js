import {createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //directly mutating the state
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();      //will remove last item directly
        },
        clearCart:(state,action)=>{
            // state.items=[]
            state.items.length=0;
        }
    }
})

export const {addItem,removeItem,clearCart} =cartSlice.actions;
export default cartSlice.reducer;