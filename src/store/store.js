import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import App from '../App';
import {applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger';
import { PersistGate } from 'redux-persist/integration/react'
import rootReducer from '../servies/reducers/index';
 


const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let  store=createStore(persistedReducer,composeEnhancer(applyMiddleware(logger)));
  let persistor = persistStore(store)
  

const storedTodo= () => { 
 
  return (
      <>
            <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
            <App />
            </PersistGate>  
        </Provider >
  </>
   )
}
export default storedTodo;