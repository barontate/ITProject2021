import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

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
    <section>
      <article className="post">
        <h2>{contact.firstName}</h2>
        <p>{contact.lastName}</p>
      </article>
    </section>
  )
}
