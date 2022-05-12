const initialState = [{
    value: 0,
    timer: 0,
}]

function timeCalculator(guessNum){
    // console.log('guessNum:',guessNum)
    const timeArr = guessNum.map(({timer}) => timer)
    const time = Math.max(...timeArr)
    return parseInt(time) + 1;
}

export default function setGuessReducer(state=initialState, action){
    switch (action.type){
        case "guess":
            return [
                ...state,
                {
                    value: parseInt(action.payload),
                    timer:  timeCalculator(state)
                }
            ]
        default:
            return state
    }
}