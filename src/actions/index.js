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

export const setSuccess = () => {
    return {
        type:"set",
        payload:{
            success: true
        }
    }
}

export const setList = () => {
    return (dispatch, getState) => {
        const { name , times } = getState()
        dispatch({
            type: "addList",
            payload: { name , times }
        })
    }   
}

// export const setList_ = () => {
//     return {
//         type: "addList_"
//     }
// }

export const reset = () => {
    return {
        type: "reset"
    }
}

