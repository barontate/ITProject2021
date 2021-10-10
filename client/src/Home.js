import './App.css'
import {Component, React} from 'react'
import styled from 'styled-components'
import PersonAddAlt1IconOutlined from '@mui/icons-material/PersonAddAlt1Outlined';
import CancelOutlined from '@mui/icons-material/CancelOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from './actions/authentication';
import { withRouter } from 'react-router-dom';


class Home extends Component {

  constructor() {
    super();
    this.state = {
      addingCard: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout= this.handleLogout.bind(this);
  }
    
  handleInputChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
      e.preventDefault();
      const user = {
          email: this.state.email,
          password: this.state.password,
      }
      console.log(user);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() { 
    return (
        <Container>
          <Header>
            <h1> LOGO </h1>
            <Button onSubmit={this.handleLogout}>
              <input type="submit" value="Logout"></input>
            </ Button>
          </Header>
          <Content>
            <ToolDisplay>
              <SearchBar>
                <input type='text'></input>
                <MySearchIcon></MySearchIcon>
              </SearchBar>
              <p>[SORT---------]</p>
              <Addcard sx={{ fontSize: '60px' }} onClick={() => this.setState({addingCard: true})}></Addcard>
            </ToolDisplay>
          </Content>
          <CardInfoInput addingCard = { this.state.addingCard }>
            <CloseButton sx={{ fontSize: '60px' }} onClick={() => this.setState({addingCard: false})}></CloseButton>
            <DataIn onSubmit = {this.handleSubmit}>
              <TextFields>
                <Name>
                  <input type='text'></input>
                  <input type='text'></input>
                  <input type='text'></input>
                </Name>
                <input type='text'></input>
                <ContactDetails>
                  <input type='text'></input>
                  <input type='text'></input>
                </ContactDetails> 
                <input type='text'></input>
                <Notes>
                  <input type='text'></input>
                </Notes>
              </TextFields>
              <LeftBar>
                <LeftIn>
                  <Picture>
                    <AddPhoto sx={{ fontSize: '80px' }}></AddPhoto>
                  </Picture>
                  <Goals>
                    <input type='text'></input>
                  </ Goals>
                  <h2>Add Goal</h2>
                </LeftIn>
                <Create>
                  <input type='submit' value='Create' />  
                </ Create>
              </ LeftBar>
            </DataIn>
          </CardInfoInput>
        </Container>
    )
  }
}

Home.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(withRouter(Home));


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

const TextIn = styled.div`
  input{
    
    height: 35px;
    border-radius: 24px;
    border-style: solid;
    border-color: #707070;
    padding-left: 10px;
    color: #1c1c1c;
  }
  input:focus{
    outline: none;
    border-radius: 24px;
    border-style: solid;
    border-color: #1c1c1c;
  }
`

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #F8F5F5;
  display: flex;
`

const Header = styled.div`
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
`

const ToolDisplay = styled.div`
  position: fixed;
  display: flex;
  top: 45px;
  height: 70px;
  align-items: center;
  justify-content: center;

  p {
    margin-left: 30px;
    margin-right: 30px;
  }
`

const Addcard = styled(PersonAddAlt1IconOutlined)`
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
  color: #707070;
`

const CardInfoInput = styled(Content)`
  display: ${props=>props.addingCard ? 'flex': 'none'};
`

const CloseButton = styled(CancelOutlined)`
  position: fixed;
  right: 30px;
  top: 30px;
  cursor: pointer;
  cursor: pointer;
  color: #707070;
`

const TextFields = styled(TextIn)`
  position: fixed;
  display: grid;
  grid-template-columns: 1;
  width: 50vw;
  top: 70px;
  right: 100px;
  input{
    margin: 10px;
  }
`

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
  input{
    width: 100%;
  }
`

const ContactDetails = styled(Name)`
`

const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 80px;
  left: 80px;
  height: 280px;
  width: 280px;
  background-color: #707070;
  border-radius: 140px;
  cursor: pointer;
  margin-bottom: 20px;
`

const AddPhoto = styled(AddAPhotoOutlinedIcon)`
  position: fixed;
`

const Notes = styled(Name)`
  input {
    height: 200px;
  }
`

const LeftBar = styled.div`
  display: grid;
  position: fixed;
  justify-content: space-between;
  width: 280px;
  left: 80px;
  top: 70px;
  bottom: 80px;
`

const Goals = styled.div`
  display: flex;
  position: relative;
  left: 0;
  right: 0;
  margin: 10px 0px;
  input{
    width: 100%;
    height: 35px;
    border-radius: 24px;
    border-style: solid;
    border-color: #707070;
    padding-left: 10px;
    color: #1c1c1c;
  }
  input:focus{
    outline: none;
    border-radius: 24px;
    border-style: solid;
    border-color: #1c1c1c;
  }
`

const LeftIn = styled.div``

const Create = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 60px;

  input[type=submit] {
    width: 100px;
    height: 40px;
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

const DataIn = styled.form.attrs({
  action: "/api/add",
  method: "post"
})``

const SearchBar = styled(TextIn)`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 35vw;
  input{
    position: relative;
    width: 100%;
    margin: 0px 0px;
  }
`

const MySearchIcon = styled(SearchIcon)`
  cursor: pointer;
  position: relative;
  right: 40px;
`

