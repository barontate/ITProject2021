import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CloseButton from '../../components/CloseButton'
import Header from '../../components/Header'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined'
import Contact from './Contact.css'


export const SingleContact = ({ match }) => {
  const { contactId } = match.params

  const contact = useSelector(state =>
    state.contacts.find(contact => contact.id === contactId)
  )

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
          <div className='rightBar'>
              <div className='splitCells'>
                <p className='splitTextBox'>{contact.firstName? contact.firstName : "FirstName: Unknown"}</p>
                <p className='splitTextBox'>{contact.middleName ? contact.middleName : "MiddleName: Unknown"}</p>
                <p className='splitTextBox'>{contact.lastName}</p>
              </div>
              <p className='textBox'>{contact.company ? contact.company : "Company: Unknown"}</p>
              <div className='splitCells'>
                <p className='splitTextBox'>{contact.phoneNumber ? contact.phoneNumber : "Phone Number: Unknown"}</p>
                <p className='splitTextBox'>{contact.email ? contact.email : "Email: Unknown"}</p>
              </div> 
              <p className='textBox'>{contact.address ? contact.address : "Address: Unknown"}</p>
              <p className='tallTextBox'>{contact.notes ? contact.notes : "No Notes"}</p>
          </div >
          <div className="leftBar">
              <LeftIn>
              <div className='picture'>
                  <AddPhoto sx={{ fontSize: '80px' }}></AddPhoto>
              </div>
              </LeftIn>
          </ div>
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

const Goals = styled.div`
  display: flex;
  position: relative;
  left: 0;
  right: 0;
  margin: 10px 0px;
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
`