import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'CSS', selected: false},
  { id: '2', name: 'Drinking Beers', selected: false },
  { id: '3', name: 'React', selected: false },
  { id: '4', name: 'Fishing', selected: false },
  { id: '5', name: 'AFL', selected: false },
]

const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    tagAdded(state, action) {
      state.push(action.payload)
    },
    tagSelected(state, action){
      state.find(tag=>tag.name === action.payload).selected = !state.find(tag=>tag.name === action.payload).selected
    },
  },
})

export const { tagAdded, tagSelected } = tagSlice.actions

export default tagSlice.reducer
