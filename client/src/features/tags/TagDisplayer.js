import { React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tag from './Tag'
import styled from 'styled-components'
import { fetchTags } from './tagSlice'

export const TagDisplayer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTags());
        }, [dispatch]
    );

    const tagObject = useSelector((state) => state.tags)

    const renderedTags = tagObject.tags.map((tag) => (
    <TagBox>
        <p>{tag.name}</p>
    </TagBox>
    ))
  
    return (
        <div>
            {renderedTags}
        </div>
    )
}


const TagBox = styled.div`
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        transform: translate(0px, -5px);
    }
`