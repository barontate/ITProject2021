import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tag from './Tag'
import styled from 'styled-components'
import fetchTags from './tagSlice'

export const TagList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
    }, [dispatch]
  );
  const tagObject = useSelector((state) => state.tags)

  const renderedTags = tagObject.tags.map((tag) => (
    
    <Tag key={tag.id} name = {tag.name} color = {tag.color} selected = {tag.selected}/>
      // {/* <p className="post-content">{post.content.substring(0, 100)}</p> */}
    
  ))

  return (
    <TagChoice>
      {renderedTags}
    </TagChoice>
  )
}

const TagChoice = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  overflow-x: auto;
  overflow-y: hidden;
  margin-left: -10px;
`
