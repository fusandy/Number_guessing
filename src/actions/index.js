// start button
export const setNum = (number) => {
    return {
        type: "setNum",
        payload: number
    }
}

// guess button
export const guessNum = (number) => {
    return {
        type:"guess",
        payload: number
    }
}