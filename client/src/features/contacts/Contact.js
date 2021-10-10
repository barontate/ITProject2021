import React from 'react'
import styled from 'styled-components'

function Contact() {

    const contact={
        firstName: "Jon",
        middleName: "",
        lastName: "Doe",
        company: "",
        email: "",
        mobile: "",
        address: "",
        notes: "",
        goals: [],
        tags: []
    }

    return (
        <Container>
            <p>{contact.firstName}</p>
            <p>{contact.lastName}</p>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid;
    border-color: #707070;
    border-radius: 45px;

`