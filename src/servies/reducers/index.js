import {combineReducers } from 'redux'
import todos from "./reducer";
import visibilityFilter from './VISIBILTY'

export default combineReducers ({todos,visibilityFilter}); 
