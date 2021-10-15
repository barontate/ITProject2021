import {Component, React} from 'react'
import styled from 'styled-components'
import Header from './Header'


class HomeBackground extends Component {
  render(){
    return (
        <Container>
            <Header />
            <Content>
                
            </Content>
        </Container>
    )
  }
}

export default HomeBackground


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