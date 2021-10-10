import axios from 'axios';
import { GET_ERRORS } from './types';

export const registerUser = (user, history) => dispatch => {
    axios.post('/api/signup', user)
            .then(res => history.push('/home'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user, history) => dispatch => {
    axios.post('/api/login', user)
            .then(res => history.push('/home'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}