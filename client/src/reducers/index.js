import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import tagReducer from '../features/tags/tagSlice';
import contactReducer from '../features/contacts/ContactSlice';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    tags: tagReducer,
    contacts: contactReducer,
});