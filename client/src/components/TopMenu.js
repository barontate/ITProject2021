import React from 'react'
import styled from 'styled-components'
import PersonAddAlt1IconOutlined from '@mui/icons-material/PersonAddAlt1Outlined';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import { TagList } from '../features/tags/TagList';
import { Link } from 'react-router-dom';

function TopMenu({choosingSort}) {
    return (
        <Container>
            <ToolDisplay>
            <SearchBar>
                <input type='text'></input>
                <MySearchIcon ></MySearchIcon>
            </SearchBar>
            <SortTab onClick={choosingSort}>
                <h3>Sort</h3>
                <MySortIcon sx={{ fontSize: '30px' }} >
                </MySortIcon>
            </SortTab>
            <Link to={'/addingCard'}>
              <Addcard sx={{ fontSize: '60px' }}></Addcard>
            </Link>
            </ToolDisplay>
            <TagList />
        </Container>
    )
}

export default TopMenu

const TextIn = styled.div`
  
  input{
    background-image: linear-gradient(to bottom, #FFFFFF, #F6F7F9);
    height: 35px;
    border-radius: 24px;
    border-style: solid;
    border-color: #707070;
    padding-left: 10px;
    color: #1c1c1c;
  }
  input:focus{
    outline: none;
    border-radius: 24px;
    border-style: solid;
    border-color: #1c1c1c;
  }
`


const ToolDisplay = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: center;

  p {
    margin-left: 30px;
    margin-right: 30px;
  }
`
const Addcard = styled(PersonAddAlt1IconOutlined)`
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
  color: #707070;
`

const SearchBar = styled(TextIn)`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 35vw;
  input{
    position: relative;
    width: 100%;
    margin: 0px 0px;
  }
`

const MySearchIcon = styled(SearchIcon)`
  cursor: pointer;
  position: relative;
  right: 40px;
`

const SortTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 35px;
  border-radius: 24px;
  border-style: solid;
  border-color: #707070;
  border-width: 3px;
  background-image: linear-gradient(to bottom, #FFFFFF, #F6F7F9);
  cursor: pointer;
  h3 {
    color: #707070;
  }
`

const MySortIcon = styled(SortIcon)`
  margin-left: 10px;
  color: #707070;
`

const Container = styled.div`
  display: grid;
  top: 45px;
  position: absolute;
`
