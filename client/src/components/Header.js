import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <Container>
          <LogoSizing to={`/home`}>
            <Logo />
          </LogoSizing> 
                <h1> Logout </h1>
        </Container>
    )
}

export default Header

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 1vh;
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 10px;
  }
`

const LogoSizing = styled(Link)`
  width: 20%;
`