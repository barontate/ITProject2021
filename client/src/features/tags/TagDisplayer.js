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
    
    const contactID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    const tagObject = useSelector((state) => state.tags)
    const contactObject = useSelector((state) => state.contacts)
    const tags = tagObject.tags
    const contact = contactObject.contacts.filter(function(e){return e._id==contactID})
    var contTags = []
    tags.forEach(tag => {
        if(contact[0].tags.includes(tag._id)){
            contTags.push(tag)
        }
    });
    const renderedTags = contTags.map((tag) => (
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