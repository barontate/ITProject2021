import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = [
  { id: '1', name: 'CSS', selected: false, color: '#E6A48A'},
  { id: '2', name: 'Drinking Beers', selected: false, color: '#A7B3A1' },
  { id: '3', name: 'React', selected: false, color: '#956868' },
  { id: '4', name: 'Fishing', selected: false, color: '#7EBFE6' },
  { id: '5', name: 'AFL', selected: false, color: '#AC7EE6' },
  { id: '6', name: 'Unimelb', selected: false, color: '#AC7EE6' },
]


export const fetchTags = () => async dispatch => {
  dispatch(tagsLoading());
  await axios.get('/api/tags')
    .then(res => {
      console.log(res.data)
      dispatch(tagsReceived(res.data));
    })
    .catch(err => {
      console.log(err)
    })
}

const tagSlice = createSlice({
  name: 'tags',
  initialState: {
    loading: 'idle',
    tags: []
  },
  reducers: {
    tagsLoading(state, action) {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    tagsReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.tags = action.payload
      }
    },
    tagSelected(state, action){
      state.find(tag=>tag.name === action.payload).selected = !state.find(tag=>tag.name === action.payload).selected
    }
  }
})

export const { tagsLoading, tagsReceived, tagSelected } = tagSlice.actions

export default tagSlice.reducer
