import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import tagReducer from '../features/tags/tagSlice'
import contactReducer from '../features/contacts/ContactSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    tags: tagReducer,
    contacts: contactReducer,
  },
})
