import React from 'react'
import styled from 'styled-components'

function Logo() {
    return (
        <Container>
            <Picture />
        </Container>
    )
}

export default Logo

const Container = styled.div`
    
`

const Picture = styled.img.attrs({
    src: '/images/logo.png'
  })`
    width: 90%;
    margin: 8px;
  `