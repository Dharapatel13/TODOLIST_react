import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import App from '../App';
import {applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger';
import { PersistGate } from 'redux-persist/integration/react'
import rootReducer from '../servies/reducers/index';
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "../config/firebaseconfig";
import { createFirestoreInstance } from "redux-firestore";
import { useSelector } from "react-redux";
import thunk from "redux-thunk";


const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let  store=createStore(persistedReducer,composeEnhancer(applyMiddleware(logger,thunk.withExtraArgument({ getFirebase }))));
  let persistor = persistStore(store)
  const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch,
    createFirestoreInstance,
  };

const storedTodo= () => { 
 
  return (
      <>
            <Provider store={store} >
         
            <PersistGate loading={null} persistor={persistor}>
            <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
            </ReactReduxFirebaseProvider> 
            </PersistGate> 
           
        </Provider >
  </>
   )
}
export default storedTodo;