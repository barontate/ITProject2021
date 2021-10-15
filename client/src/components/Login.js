import '../App.css';
import styled from 'styled-components'
import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {registerUser, loginUser} from '../actions/authentication';
import Logo from './Logo'

class Login extends Component {

  constructor() {
    super();
    this.state = {
        email: '',
        password: '',
        userName: '',
        firstName: '',
        lastName: '',
        loginStatus: false,
        errors: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }
    
  handleInputChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleLogin(e) {
      e.preventDefault();
      const user = {
          email: this.state.email,
          password: this.state.password,
      }
      this.props.loginUser(user, this.props.history);
  }

  handleSignup(e) {
    e.preventDefault();
    const user = {
        email: this.state.email,
        password: this.state.password,
        userName: this.state.userName,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
    }
    this.props.registerUser(user, this.props.history);
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/home')
    }
    if(nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    }
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
        this.props.history.push('/home');
    }
  }

  render() {
    return (
      <Container>
        <LogoWrap>
          <LogoSizing>
            <Logo/>
          </LogoSizing>
        </ LogoWrap>
        <LoginForm onSubmit={this.handleLogin}>
          <LSwindow loginStatus={this.state.loginStatus}>
              <input type='text' id='email' name='email' placeholder="Email" onChange={this.handleInputChange} value={this.state.email}/>
              <input type='password' id='password' name='password' placeholder="Password" onChange={this.handleInputChange} value={this.state.password} />
              <Button>
              <input type="submit" value="Login"></input>
              </ Button>
          </LSwindow>
        </LoginForm>
        <SignUpForm onSubmit={this.handleSignup}>
          <LSwindow loginStatus={!this.state.loginStatus}>
              <input type='text' id='userName' name='userName' placeholder="Username" onChange={this.handleInputChange} value={this.state.userName}/>
              <input type='text' id='firstName' name='firstName' placeholder="First Name" onChange={this.handleInputChange} value={this.state.firstName}/>
              <input type='text' id='lastName' name='lastName' placeholder="Last Name" onChange={this.handleInputChange} value={this.state.lastName}/>
              <input type='text' id='email' name='email' placeholder="Email" onChange={this.handleInputChange} value={this.state.email}/>
              <input type='password' id='password' name='password' placeholder="Password" onChange={this.handleInputChange} value={this.state.password}/>
              <Button>
              <input type="submit" value="Signup"></input>
              </ Button>
          </LSwindow>
        </SignUpForm>
        <Footer>
          <LSprompt loginStatus={this.state.loginStatus} onClick={() => this.setState({loginStatus: true})}>
              <p>Don't have an account? Sign up here</p>
          </LSprompt>
          <LSprompt loginStatus={!this.state.loginStatus} onClick={() => this.setState({loginStatus: false})}>
              <p>Have an account? Login here</p>
          </LSprompt>
          <p>Contact us: branch@gmail.com</p>
        </Footer>
      </Container>
    );
  }
}

Login.propTypes = {
  registerUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps,{registerUser, loginUser})(withRouter(Login))

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

const LogoSizing = styled.div`
  width: 50%;
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