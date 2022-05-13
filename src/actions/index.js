// evoked when press the start button
export const setName = (name) => {
    return {
        type: "setName",
        payload: name
    }
}

// start button
export const setNum = (number) => {
    return {
        type: "setInit/set",
        payload: number
    }
}
export const clearNum = () => {
    return {
        type: "setInit/clear"
    }
}

// guess button
export const setRecord = (number) => {
    return {
        type:"setRecord/guess",
        payload: number
    }
}
export const clearRecord = () =>{
    return {
        type: "setRecord/clear"
    }
}

// change the max number
export const changeMax = (number) => {
    return {
        type:"change/max",
        payload: number
    }
}

// change the min number
export const changeMin = (number) => {
    return {
        type:"change/min",
        payload: number
    }
}

export const clearRange = () => {
    return {
        type:"clear"
    }
}

// set the result into the list
export const setList = (data) => {
    return {
        type: "setList/add",
        payload: data
    }
}