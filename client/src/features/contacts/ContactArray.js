import {React, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchContacts } from './ContactSlice'

export const ContactArray = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]
  );

  const contactObject = useSelector(state => state.contacts);
  const renderedContacts = contactObject.contacts.map(contact => (
    <ContactCard className="contact-excerpt" to={`/contact/${contact._id}`} style={{textDecoration: 'none'}}>
      <Card>
      <Name>
        <p>{contact.firstName+" "+contact.lastName}</p> 
      </Name>
      <Highlight> 
        <p>{contact.highlight}</p> 
      </Highlight>
      </Card>
    </ContactCard>
  ))
  
  return (
    <Container className="contact-list">
      {renderedContacts}
    </Container>
  )
}

export default ContactArray


const Container = styled.div`
    position: relative;
    display: grid;
    grid-gap: 1vw;
    grid-template-columns: repeat( auto-fill, minmax(18vw, 18vw) );
    grid-template-rows: repeat( auto-fill, minmax(18vh, 18vh) );
    top: 18vh;
    max-width: 65vw;
    height: 45vh;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 24px;
    padding-bottom: 24px;
`

const ContactCard = styled(Link)`
    width: 18vw;
    height: 18vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid;
    border-color: #707070;
    border-radius: 2vw;
    p{
      color: #707070;
      text-decorations-style: none;
    }

`

const Name = styled.h1`
   display: flex;
   text-align: center;
   p {
    padding: 8px;
    font-size: 24px;
    border: none;
    margin: 0px 5px;
   }
`
const Highlight = styled.p`
   border: none;
   justify-content: center;
   display: flex;
   p {
    border: none;
    margin: 0px 5px;
  }
`

const Card = styled.div`
   display: inline;
   justify-content: center;
   align-items: center;
`