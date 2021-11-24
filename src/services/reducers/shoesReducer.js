import { ADD_SHOE } from "../actions"

const inititalState = {
    shoeCart: []
}

export const shoesReducer = (state = inititalState, action) => {
    switch(action.type){
        case ADD_SHOE:
            return {
                ...state,
                shoeCart: state.shoeCart.concat(action.payload)
            } 
        default:
            return state
    }
}