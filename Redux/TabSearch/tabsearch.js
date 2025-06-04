import { createSlice } from '@reduxjs/toolkit'

export const tabsearch = createSlice({
  name: 'tab',
  initialState: {
    value: 0,
    selectTab : 'random'
  },
  reducers: {
    
    select: (state, action) => {
      state.selectTab = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { select } = tabsearch.actions

export const selectReducer =  tabsearch.reducer