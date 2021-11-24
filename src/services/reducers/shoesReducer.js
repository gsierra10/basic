import { ADD_SHOE } from "../actions/actionTypes"

const inititalState = {
    shoeCart: []
}

export const shoesReducer = (state = inititalState, action) => {
    switch(action.type){
        case ADD_SHOE:
            console.log(action.payload)
            return {
                ...state,
                shoeCart: state.shoeCart.concat(action.payload) 
            } 
        default:
            return state
    }
}