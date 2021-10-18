import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsLoading());
  await axios.get('/api/contacts')
    .then(res => {
      console.log(res.data)
      dispatch(contactsReceived(res.data));
    })
    .catch(err => {
      console.log(err)
    })
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    loading: 'idle',
    contacts: []
  },
  reducers: {
    contactsLoading(state, action) {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    contactsReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.contacts = action.payload
      }
    }
  }
})

export const { contactsLoading, contactsReceived } = contactSlice.actions

export default contactSlice.reducer
