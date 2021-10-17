import {React, useState} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { tagSelected } from './tagSlice'


function Tag({name, selected, color}) {
    
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
    
    }

    return (
        <Container onClick={onTagSelected} selected={selected} color={color}>
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