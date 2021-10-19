import {React, useState} from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { tagSelected } from './tagSlice'
import { fetchContactsByTag, fetchContacts } from '../contacts/ContactSlice'

// from stackoverflow: https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
var generateColor = function(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

function Tag({name, selected, tagID}) {
    
    // const [selected, setSelected] = useState(selectedTags.indexOf(name)>-1);
    // , selectedTags, selectEl
    // function selection(){
    //     selectEl();
    //     setSelected(!selected);
    // }
    // onClick={selection} selected = {selected}


    const dispatch = useDispatch();

    const onTagSelected = () => {
        dispatch(
            tagSelected(name)
        )
        if (selected) {
            dispatch(fetchContacts())
        }
        else {
            dispatch(fetchContactsByTag(tagID))
        }
    }


    return (
        <Container onClick={onTagSelected} selected={selected} color={generateColor(name)}>
            <h3> {name} </h3>
        </Container>
    )
}

export default Tag

// ${seleectedTags=>selectedTags. ? "grey" : "white"}

const Container = styled.div`
    background-color: ${props=>props.selected ? props.color : "white"};
    height: 60px;
    min-width: 150px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    border-style: solid;
    border-color: #707070;
    border-width: 3px;
    cursor: pointer;
    h3 {
        z-index: 100;
        color: ${props=>props.selected ? "#FFFFFF" : "#707070"};
    }
`