const initialRange = { max:50, min:1 }

export default function setRangeReducer(state=initialRange, action){
    switch (action.type){
        case "change/max":
            return {...state, max: action.payload}
        case "change/min":
            return {...state, min: action.payload}
        case "clear":
            return initialRange
        default:
            return state
    }
}