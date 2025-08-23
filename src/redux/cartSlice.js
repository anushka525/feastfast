import {createSlice} from '@reduxjs/toolkit';;

const cartSlice=createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            let exist=state.find(item => item.id === action.payload.id);
            if(exist){
                state.map(item => {
                    if(item.id === action.payload.id) item.qty += action.payload.qty;
                });
            }else{
                state.push(action.payload);
            } 
        },
        RemoveItem:(state,action)=>{
            return state.filter(item => item.id !== action.payload);
        },
        IncrementQty:(state, action)=>{
            let exist=state.find(item => item.id === action.payload.id);
            if(exist){
                state.map(item => {
                    if(item.id === action.payload.id) item.qty += 1;
                });
            }
        },
        DecrementQty:(state, action)=>{
            let exist=state.find(item => item.id === action.payload.id);
            if(exist){
                state.map(item => {
                    if(item.id === action.payload.id) item.qty -= 1;
                });
            }
        }
    }
});

export const { addItem, RemoveItem, IncrementQty, DecrementQty } = cartSlice.actions;
export default cartSlice.reducer;