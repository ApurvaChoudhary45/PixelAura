import { createSlice } from '@reduxjs/toolkit'

export const search = createSlice({
  name: 'search',
  initialState: {
    query : 'random'
  },
  reducers: {
    
    searchQuery: (state, action) => {
      state.query = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { searchQuery } = search.actions

export const searchReducer =  search.reducer