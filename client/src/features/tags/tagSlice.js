import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'CSS', selected: false, color: '#E6A48A'},
  { id: '2', name: 'Drinking Beers', selected: false, color: '#A7B3A1' },
  { id: '3', name: 'React', selected: false, color: '#956868' },
  { id: '4', name: 'Fishing', selected: false, color: '#7EBFE6' },
  { id: '5', name: 'AFL', selected: false, color: '#AC7EE6' },
  { id: '6', name: 'Unimelb', selected: false, color: '#AC7EE6' },
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
