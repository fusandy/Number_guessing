const initialRecord = [{
    value: 0,
    timer: 0,
}]

function timeCalculator(guessNum){
    // console.log('guessNum:',guessNum)
    const timeArr = guessNum.map(({timer}) => timer)
    const time = Math.max(...timeArr)
    return parseInt(time) + 1;
}

export default function setRecordReducer(state=initialRecord, action){
    switch (action.type){
        case "setRecord/guess":
            return [
                ...state,
                {
                    value: parseInt(action.payload),
                    timer:  timeCalculator(state)
                }
            ]
        case "setRecord/clear":
            return initialRecord
        default:
            return state
    }
}