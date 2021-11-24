import { createStore } from  'redux';
import { ADD_SHOE, DELETE_SHOE } from './actions';

const inititalState = {
    shoeCart:[]
}

const reducer = (state = inititalState, action) => {
    switch(action.type){
        case ADD_SHOE:
            return {
                ...state,
                shoeCart: state.shoeCart.concat(action.payload)
            }
        case DELETE_SHOE:
            return {
                ...state
            }    
        default:
            return state
    }
}

export default createStore(reducer);