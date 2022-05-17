const init = {
    name: '',
    answer: 0,
    value: 0,
    max: 50,
    min: 1,
    times: 0,
    list: []
}

export default function gameReducer(state=init, action){
    switch (action.type){
        case 'set':
            return {
                ...state,
                ...action.payload
            }
        case 'reset':
            return {
                ...init,
                list: state.list
            }
        case 'addList':
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        default:
            return state
    }
}
                    