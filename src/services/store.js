import { createStore } from  'redux';
import { ADD_SHOE, LOG_IN } from './actions/actionTypes';
import { mainReducer } from './reducers/mainReducer'

export default createStore(mainReducer);