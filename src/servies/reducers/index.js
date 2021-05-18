import {combineReducers } from 'redux'
import ListData from "./reducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import visibilityFilter from './VISIBILTY'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    ListData
  });
  
  export default rootReducer;

