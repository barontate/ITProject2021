import {React, Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import {addTag} from '../actions/authentication'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AddTag extends Component {

    constructor() {
        super();
        this.state = {
          name: '',
          color: ''
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
        const tag = {
          name: this.state.name
        }
        this.props.addTag(tag, this.props.history)
      }
    
      handleLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
      }

    render(){
        return (
            <TagForm onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Tag Name"/>
            <input type="submit" value="Add Tag"/>
            </TagForm>
        )
    }
}

AddTag.propTypes = { 
    addTag: PropTypes.func.isRequired
  }

export default connect(null, {addTag})(withRouter(AddTag))

const TagForm = styled.form`
    
    input[type=text]{
        margin: 10px;
        background-image: linear-gradient(to bottom, #FFFFFF, #F6F7F9);
        height: 5vh;
        border-radius: 24px;
        border-style: solid;
        border-color: #707070;
        padding-left: 10px;
        color: #1c1c1c;
        border-width: 2px;
    }
    input[type=text]:focus{
        outline: none;
        border-radius: 24px;
        border-style: solid;
        border-color: #1c1c1c;
        border-width: 2px;
    }
    input[type=submit] {
        margin: 10px;
        text-align: center;
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