export default function setRangeReducer(state={ max:50, min:1 }, action){
    switch (action.type){
        case "change/max":
            return {...state, max: action.payload}
        case "change/min":
            return {...state, min: action.payload}
        default:
            return state
    }
}