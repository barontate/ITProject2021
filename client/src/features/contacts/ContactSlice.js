import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', firstName: 'Jon', lastName: 'Doe', highlight: "From uni", notes: "All round good bloke"},
  { id: '2', firstName: 'Jeff', highlight: "Good at haskell", lastName: 'Wiggim' },
  { id: '3', firstName: 'Jeff', lastName: 'Wiggim' },
  { id: '4', firstName: 'Nelson', highlight: "Has a boat", lastName: 'Walker'},
  { id: '5', firstName: 'Jon', highlight: "From school", lastName: 'Doe'},
  { id: '6', firstName: 'Jeff', lastName: 'Wiggim' },
  { id: '7', firstName: 'Jeff', lastName: 'Wiggim' },
  { id: '8', firstName: 'Nelson', lastName: 'Walker'},
  { id: '9', firstName: 'Jon', lastName: 'Doe'},
  { id: '10', firstName: 'Jeff', lastName: 'Wiggim' },
]

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    contactAdded(state, action) {
      state.push(action.payload)
    },
  },
})

export const { contactAdded, reverseOrder } = contactSlice.actions

export default contactSlice.reducer
