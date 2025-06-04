import { configureStore } from '@reduxjs/toolkit'
import { cardReducer } from './Details/details'
import { searchReducer } from './Search/search'
import { filterReducer } from './Like/like'
import { darkReducer } from './mode/dark'
import { selectReducer } from './TabSearch/tabsearch'
export const store =  configureStore({
  reducer: {
   card: cardReducer,
   search: searchReducer,
   fill: filterReducer,
   black: darkReducer,
   tab: selectReducer
  }
})