// import './App.css'
import {React, useState} from 'react'
import styled from 'styled-components'
import PersonAddAlt1IconOutlined from '@mui/icons-material/PersonAddAlt1Outlined';
import CancelOutlined from '@mui/icons-material/CancelOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import Header from './components/Header';
import {TagList} from './features/tags/TagList'
import Contact from './features/contacts/Contact'
import ContactArray from './features/contacts/ContactArray';
import TopMenu from './components/TopMenu';


const Home = () => {

  const [addingCard, setAddingCard] = useState(false);
  const [choosingSort, setChoosingSort] = useState(false);

  const isAddingCard = () => setAddingCard(true);
  const notAddingCard = () => setAddingCard(false);

  const isChoosingSort = () => setChoosingSort(true);
  const notChoosingSort = () => setChoosingSort(false);

//   list to be given to us from the server
  const listOfTags = [];
  listOfTags.push("CSS");
  listOfTags.push("Drinking Beers");
//   list to be given to us by the server? may have to refresh the page to display it?
  // var selectedTags =[];
  
    return (
        <Container>
            <Header />
            <Content>
              {!addingCard&&!choosingSort&&(
                <TopMenu methods={{isChoosingSort, isAddingCard}} />
              )}
              {!addingCard&&choosingSort&&(
              <SortSelection>
                <CloseButton sx={{ fontSize: '40px' }} onClick={notChoosingSort}></CloseButton>
              </SortSelection>)}
              {!addingCard&&<ContactArray />}
            
          {addingCard&&(<CardInfoInput>
            <CloseButton sx={{ fontSize: '60px' }} onClick={notAddingCard}></CloseButton>
            <DataIn>
              <TextFields>
                <Name>
                  <input type='text'></input>
                  <input type='text'></input>
                  <input type='text'></input>
                </Name>
                <input type='text'></input>
                <ContactDetails>
                  <input type='text'></input>
                  <input type='text'></input>
                </ContactDetails> 
                <input type='text'></input>
                <Notes>
                  <input type='text'></input>
                </Notes>
              </TextFields>
              <LeftBar>
                <LeftIn>
                  <Picture>
                    <AddPhoto sx={{ fontSize: '80px' }}></AddPhoto>
                  </Picture>
                  <Goals>
                    <input type='text'></input>
                  </ Goals>
                  <h2>Add Goal</h2>
                </LeftIn>
                <Create>
                  <input type='submit' value='Create' />  
                </ Create>
              </ LeftBar>
            </DataIn>
          </CardInfoInput>
          )}
        </Content>
        </Container>
    )
}

export default Home;

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

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #F8F5F5;
  display: flex;
`

const Content = styled.div`
  position: fixed;
  display: flex;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 80vw;
  background-color: white;
  border-style: solid;
  border-color: #707070;
  border-radius: 32px;
  border-width: 2px;
  overflow: hidden;
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

const CardInfoInput = styled.div`
  display: flex;
  background-color: white;
  height: 80vh;
  width: 80vw;
`

const CloseButton = styled(CancelOutlined)`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
  cursor: pointer;
  color: #707070;
`

const TextFields = styled(TextIn)`
  position: fixed;
  display: grid;
  grid-template-columns: 1;
  width: 50vw;
  top: 70px;
  right: 100px;
  input{
    margin: 10px;
  }
`

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
  input{
    width: 100%;
  }
`

const ContactDetails = styled(Name)`
`

const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 80px;
  left: 80px;
  height: 280px;
  width: 280px;
  background-color: #707070;
  border-radius: 140px;
  cursor: pointer;
  margin-bottom: 20px;
`

const AddPhoto = styled(AddAPhotoOutlinedIcon)`
  position: fixed;
`

const Notes = styled(Name)`
  input {
    height: 200px;
  }
`

const LeftBar = styled.div`
  display: grid;
  position: fixed;
  justify-content: space-between;
  width: 280px;
  left: 80px;
  top: 70px;
  bottom: 80px;
`

const Goals = styled.div`
  display: flex;
  position: relative;
  left: 0;
  right: 0;
  margin: 10px 0px;
  input{
    width: 100%;
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

const LeftIn = styled.div``

const Create = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 60px;

  input[type=submit] {
    width: 100px;
    height: 40px;
    padding: 5px;
    border-radius: 10px;
    background-color: rgb(150, 180, 180);
    cursor: pointer;
    outline: none;
    border: none;
    box-shadow: 2px 2px 5px grey;
  }
  input[type=submit]:hover {
    background-color: rgb(50, 230, 230);
    cursor: pointer;
    box-shadow: 4px 4px 5px grey;
  }
  
  
`

const DataIn = styled.form.attrs({
  action: "/api/add",
  method: "post"
})``

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

const SortSelection = styled.div`
  display: flex;
  position: absolute;
  top: 65px;
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 45vw;
  background-color: white;
  border-style: solid;
  border-color: #707070;
  border-radius: 32px;
  border-width: 2px;
  background-image: linear-gradient(to bottom, #FFFFFF, #F6F7F9);
`

// const TopMenu = styled.div`
//   display: grid;
//   top: 45px;
//   position: absolute;
//   grid-template-columns: 1;
//   width: 45vw;
// `
