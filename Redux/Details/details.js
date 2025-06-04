import { createSlice } from '@reduxjs/toolkit'

const details = createSlice({
  name: 'card',
  initialState: {
    cards: [],
  },
  reducers: {
    setcards: (state, action) => {
      state.cards = action.payload
    },
    addcards: (state, action)=>{
      state.cards = [...state.cards, ...action.payload]
    }
  },
})

export const { setcards, addcards } = details.actions
export const cardReducer =  details.reducer
