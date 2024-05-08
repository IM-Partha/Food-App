import { createSlice } from "@reduxjs/toolkit";

const Cartslice= createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
       addToCart : (state, action)=>{
        const existingItem = state.cart.find((item) => item.id === action.payload.id )
        if(existingItem){
          state.cart=  state.cart.map(item => item.id === action.payload.id ? {...item , quty: item.quty +1} : item)
        }
        else{
            state.cart.push({...action.payload, quty: 1})
        }
   
       },
      removeCart : (state, action)=>{
       state.cart = state.cart.filter(item =>item.id !== action.payload.id)
      },
      incrementItem : (state , action)=>{
        state.cart = state.cart.map((item) => {
          return  item.id === action.payload.id ? {...item, quty: item.quty +1}: item})
      },
      decrementItem : (state, action) =>{
        state.cart = state.cart.map((item)=>{
          return  item.id === action.payload.id ? {...item, quty: item.quty>1 ? item.quty-1 : 1} : item
        })
      }

    }
})

export const {addToCart, removeCart , incrementItem, decrementItem} =  Cartslice.actions
export default Cartslice.reducer