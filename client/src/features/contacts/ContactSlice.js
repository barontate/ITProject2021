import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', firstName: 'Jon', lastName: 'Doe'},
  { id: '2', firstName: 'Jeff', lastName: 'Wiggim' },
  { id: '3', firstName: 'Jeff', lastName: 'Wiggim' },
  { id: '4', firstName: 'Nelson', lastName: 'Walker'},
  { id: '5', firstName: 'Jon', lastName: 'Doe'},
  { id: '6', firstName: 'Jeff', lastName: 'Wiggim' },
  { id: '7', firstName: 'Jeff', lastName: 'Wiggim' },
  { id: '8', firstName: 'Nelson', lastName: 'Walker'},
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

export const { contactAdded } = contactSlice.actions

export default contactSlice.reducer
