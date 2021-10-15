import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ContactArray = () => {
    
  // .sort((a,b)=>a.firstName < b.firstName);
    const contacts = useSelector(state => state.contacts);
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
    grid-gap: 1vw;
    grid-template-columns: repeat( auto-fill, minmax(18vw, 18vw) );
    grid-template-rows: repeat( auto-fill, minmax(18vh, 18vh) );
    top: 18vh;
    max-width: 65vw;
    height: 45vh;
    overflow-y: scroll;
    overflow-x: hidden;
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