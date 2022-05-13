const initialNum = { value : 0 }

export default function setInitReducer(state=initialNum, action){
    switch (action.type){
        case "setInit/set":
            return { ...state, value: action.payload }
        case "setInit/clear":
            return initialNum
        default:
            return state
    }
}