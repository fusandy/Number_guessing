// const init = {
//     name: '',
//     answer: 0,
//     value: 0,
//     max: 50,
//     min: 1,
//     times: 0,
//     list:[]
// }

export const setNameAndAnswer = (name, number) => {
    return {
        type: "set",
        payload: {
            name: name,
            answer: number
        }
    }
}

export const setValueAndTimes = (number, times) => {
    return {
        type:"set",
        payload: {
            value: number,
            times: times        
        }
    }
}

export const changeMax = (number) => {
    return {
        type:"set",
        payload: {
            max: number
        }
    }
}

export const changeMin = (number) => {
    return {
        type:"set",
        payload: {
            min: number
        }
    }
}

export const setList = (record) => {
    return {
        type: "addList",
        payload: record
    }
}

export const reset = () => {
    return {
        type: "reset",
        payload:{
            name: '',
            answer: 0,
            value: 0,
            max: 50,
            min: 1,
            times: 0
        }
    }
}

