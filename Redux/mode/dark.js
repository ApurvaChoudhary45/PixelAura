import { createSlice } from '@reduxjs/toolkit'

export const dark = createSlice({
  name: 'black',
  initialState: {
    value: 0,
    darkmode : false
  },
  reducers: {
    
    goingDark: state => {
      state.darkmode = !state.darkmode
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { goingDark } = dark.actions

export const darkReducer =  dark.reducer