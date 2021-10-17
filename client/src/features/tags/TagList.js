import React from 'react'
import { useSelector } from 'react-redux'
import Tag from './Tag'
import styled from 'styled-components'

export const TagList = () => {
  const tags = useSelector((state) => state.tags)

  const renderedTags = tags.map((tag) => (
    
    <Tag key={tag.id} name = {tag.name} selected = {tag.selected}/>
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
