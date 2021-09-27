import './App.css';
import styled from 'styled-components';
import React, { Component } from 'react';


export default class Loginpage extends Component {

  render() {
    return (
      <Container>        
        <Logo>
          <Tree/>
          <h1>Branch</h1>
        </ Logo>
        <Inputs>
          <input type='text' id='username' placeholder="Username" />
          <input type='password' id='password' placeholder="Password" />
          <Button>
            <input type="submit" value="Login"></input>
          </ Button>
        </Inputs>
        <Footer>
          <p>Don't have an account? Sign up here</p>
          <p>Contact us: branch@gmail.com</p>
        </Footer>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("/images/background.png");
  background-position: center;
  background-size: cover;
`

const Footer = styled.div`
  position: fixed;
  display: flex;
  color: white;
  font-weight: 700;
  font-size: 20px;
  height: 60px;
  background-color: black;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0 10px;
  }
`

const Tree = styled.img.attrs({
  src: '/images/tree.png'
})`
  width: 120px;
  height: 120px;
  transform: rotate(-90deg);
  margin-right: 6px;
`

const Logo = styled.div`
  height: 80px;
  display: flex;
  position: fixed;
  align-items: center;
  top: 15%;
  left: 50%; 
  transform: translate(-68%, 0);
  font-size: 30px;
  h1 {
    transform: translate(0, -5px);
  }
`

const Inputs = styled.form.attrs({
  
})`
  display: grid;
  grid-template-columns: 1;
  gap: 10px;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 35%;
  left: 50%; 
  transform: translate(-50%, 0%);

  input[type=text], input[type=password] {
    padding: 5px 5px;
    background-color: transparent;
    margin: 8px 0;
    border-bottom: 1px solid black;
    border-right: none;
    border-top: none;
    border-left: none;
    box-sizing: border-box;
    color: black;
  }

  input[type=text]:focus, input[type=password]:focus  {
    outline: none;
  }

  
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  

  input[type=submit] {
    width: 60px;
    padding: 5px;
    border-radius: 10px;
    background-color: rgb(150, 180, 180);
    outline: none;
    border: none;
    box-shadow: 2px 2px 5px grey;
  }

  input[type=submit]:hover {
    background-color: rgb(50, 230, 230);
    box-shadow: 4px 4px 5px grey;
  }
`