import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

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
      state.tags.find(tag=>tag.name === action.payload).selected = !state.tags.find(tag=>tag.name === action.payload).selected
    }
  }
})

export const { tagsLoading, tagsReceived, tagSelected } = tagSlice.actions

export default tagSlice.reducer
