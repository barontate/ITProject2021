import './App.css';
import React, { Component, useState, useRef } from 'react';
import styled from 'styled-components'

export default class Loginpage extends Component {

 constructor(props) {
    super(props);

    // this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      toLogin: true,
      // username: "",
      // password: "",
      // loading: false,
      // message: ""
    };
  }

  render() {
    return (
      <Container>
      
      <LogoWrap>
        <Logo/>
      </ LogoWrap>
      <LoginForm>
        <LSwindow loginStatus={!this.state.toLogin}>
            <input type='text' id='email' name='email' placeholder="Email" />
            <input type='password' id='password' name='password' placeholder="Password" />
            <Button>
            <input type="submit" value="Login"></input>
            </ Button>
        </LSwindow>
      </LoginForm>
      <SignUpForm>
        <LSwindow loginStatus={this.state.toLogin}>
            <input type='text' id='userName' name='userName' placeholder="Username" />
            <input type='text' id='firstName' name='firstName' placeholder="First Name" />
            <input type='text' id='lastName' name='lastName' placeholder="Last Name" />
            <input type='text' id='email' name='email' placeholder="Email" />
            <input type='password' id='password' name='password' placeholder="Password" />
            <Button>
            <input type="submit" value="Signup"></input>
            </ Button>
        </LSwindow>
      </SignUpForm>
      <Footer>
        <LSprompt loginStatus={ !this.state.toLogin } onClick={() => this.setState({ toLogin: false })}>
            <p>Don't have an account? Sign up here</p>
        </LSprompt>
        <LSprompt loginStatus={ this.state.toLogin } onClick={() => this.setState({ toLogin: true })}>
            <p>Have an account? Login here</p>
        </LSprompt>
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
  color: grey;
  font-weight: 700;
  font-size: 20px;
  height: 55px;
  background-color: black;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
`

const LSprompt = styled.p`
    margin: 0 10px;
    display: ${props => props.loginStatus ? 'none' : 'flex'};
    cursor: pointer;
    p:hover{
        color: white;
    }
`

const Logo = styled.img.attrs({
  src: '/images/logo.png'
})`
  width: 50%;
  margin-right: 6px;
`

const LogoWrap = styled.div`
    height: 80px;
    display: flex;
    position: fixed;
    align-items: center;
    top: 15%;
    left: 50%; 
    transform: translate(-30%, 0);
    font-size: 30px;
    h1 {
        transform: translate(0, -5px);
    }
`

const LoginForm = styled.form.attrs({
  action: "/api/login",
  method: "post"
})`
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

const SignUpForm = styled.form.attrs({
  action: "/api/signup",
  method: "post"
})`
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
    cursor: pointer;
    outline: none;
    border: none;
    box-shadow: 2px 2px 5px grey;
  }

  input[type=submit]:hover {
    background-color: rgb(50, 230, 230);
    cursor: pointer;
    box-shadow: 4px 4px 5px grey;
  }
`

const LSwindow = styled.div`
    display: ${props => props.loginStatus ? 'none' : 'grid'};
    grid-template-columns: 1;
    
    
`

