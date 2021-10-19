import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CloseButton from '../../components/CloseButton'
import Header from '../../components/Header'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined'
import axios from 'axios';
import Contact from './Contact.css'
import { TagDisplayer } from '../tags/TagDisplayer'


export const SingleContact = ({ match }) => {
  const { contactId } = match.params

  const contact = useSelector(state =>
    state.contacts.contacts.find(contact => contact._id === contactId)
  )

  const handleDelete = async function () {
    const contactID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    await axios.post('/api/remove', {contactID: contactID})
      .then(res => {
        window.location.href = '/'
      });
  }

  if (!contact) {
    return (
      <section>
        <h2>Contact not found!</h2>
      </section>
    )
  }

  return (
    <Container>
      <Header />
      <Content>
        <CardInfoInput>
          <CloseButton />
          <TextFields>
              <div className='splitCells'>
              {contact.firstName ?  <p className='splitTextBox textDisplay'>{contact.firstName} </p>: <GreyText className='splitTextBox textDisplay'>First Name </GreyText>}
              {contact.middleName ? <p className='splitTextBox textDisplay'> {contact.middleName} </p> : <GreyText className='splitTextBox textDisplay'>Middle Name</GreyText>}
              {contact.lastName ? <p className='splitTextBox textDisplay'> {contact.lastName} </p> : <GreyText className='splitTextBox textDisplay'>Last Name</GreyText>}
              </div>
              {contact.company ? <p className='textBox textDisplay'> {contact.company} </p> : <GreyText className='textBox textDisplay'>Company</GreyText>}
              <div className='splitCells'>
              {contact.phoneNumber ? <p className='splitTextBox textDisplay'>{contact.phoneNumber} </ p> : <GreyText className='splitTextBox textDisplay'> Phone Number </GreyText>}
              {contact.email ? <p className='splitTextBox  textDisplay'>{contact.email}</p> : <GreyText className='splitTextBox textDisplay'>Email</GreyText>}
              </div> 
              {contact.address ? <p className='textBox  textDisplay'> {contact.address} </p> : <GreyText className='textBox textDisplay'> Address </ GreyText>}
              {contact.notes ? <p className='tallTextBox  textDisplay'> {contact.notes} </p> : <GreyText className='tallTextBox textDisplay'>No Notes</GreyText>}
          </TextFields >
          <div className="leftBar">
              <LeftIn>
              {contact.highlight ? <p className='splitTextBox textDisplay'> {contact.highlight} </p>: <GreyText className='splitTextBox textDisplay'>Highlight</ GreyText>}
              </LeftIn>
              <TagDisplayer />
          </ div>
          <Delete>
           <input className='textBox' type='submit' value='Delete' onClick={handleDelete}/>  
          </ Delete>
        </CardInfoInput>
      </Content>
    </Container>

  )
}

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

const CardInfoInput = styled.div`
  display: flex;
  background-color: white;
  height: 80vh;
  width: 80vw;
`

const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 15vw;
  width: 15vw;
  background-color: #707070;
  border-radius: 140px;
  cursor: pointer;
  margin-bottom: 20px;
`

const AddPhoto = styled(AddAPhotoOutlinedIcon)`
  position: fixed;
`

const LeftBar = styled.div`
  display: grid;
  position: fixed;
  justify-content: space-between;
  width: 15vw;
  left: 7vh;
  top: 7vh;
  bottom: 80px;
`

const LeftIn = styled.div`
  width: 100%;
`

const GreyText = styled.p`
  color: #707070;
`

const Delete = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 60px;

  input[type=submit] {
    text-align: center;
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

const TextFields = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1;
  width: 50vw;
  top: 5vh;
  right: 7vw;
`