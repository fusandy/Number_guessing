export default function setInitReducer(state={ value: 0 }, action){
    switch (action.type){
        case "setNum":
            return { ...state, value: action.payload }
        default:
            return state
    }
}