// start button
export const setNum = (number) => {
    return {
        type: "setNum",
        payload: number
    }
}

// guess button
export const setRecord = (number) => {
    return {
        type:"guess",
        payload: number
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