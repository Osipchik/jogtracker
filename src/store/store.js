import { createStore } from 'redux';
import { jogsReducer } from './reducers/jogsReducer';


const store = createStore(jogsReducer);

export default store;