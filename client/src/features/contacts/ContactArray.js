import React from 'react'
import Contact from './Contact'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ContactArray = () => {
    const contacts = useSelector(state => state.contacts)
  
    const renderedContacts = contacts.map(contact => (
        <ContactCard className="contact-excerpt" key={contact.id}
             to={`/contact/${contact.id}`} style={{textDecoration: 'none'}}>
            <p>{contact.firstName}</p>
            <p>{contact.lastName}</p>
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
    grid-gap: 50px;
    grid-template-columns: repeat( auto-fill, minmax(300px, 300px) );
    grid-template-rows: repeat( auto-fill, minmax(200px, 200px) );
    top: 20vh;
    max-width: 60vw;
    height: 65vh;
    overflow-y: scroll;
    overflow-x: none;
`

const ContactCard = styled(Link)`
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid;
    border-color: #707070;
    border-radius: 45px;
    p{
        color: #707070;
        text-decorations-style: none;
    }

`