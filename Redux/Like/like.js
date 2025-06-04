import { createSlice } from '@reduxjs/toolkit'

export const like = createSlice({
  name: 'fill',
  initialState: {
    cards: []
  },
  reducers: {
    
    filter: (state, action) => {
      const id = action.payload
      if(state.cards.includes(id)){
        state.cards = state.cards.filter(i=> i !== id)
      }
      else{
        state.cards.push(id)
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { filter } = like.actions

export const filterReducer =  like.reducer