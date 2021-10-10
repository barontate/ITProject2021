import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { tagAdded } from './tagSlice'

export const AddTag = () => {

  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const onNameChanged = (e) => setName(e.target.value)

  const onSaveTagClicked = () => {
    if (name) {
      dispatch(
        tagAdded({
          id: nanoid(),
          name
        })
      )

      setName('')
    }
  }

  return (
    <section>
      <form>
        {/* <label htmlFor="postTitle">Post Title:</label> */}
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onNameChanged}
        />
        {/* <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        /> */}
        <button type="button" onClick={onSaveTagClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}
