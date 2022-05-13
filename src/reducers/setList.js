const initialList = []

export default function setListReducer(state=initialList, action){
    switch (action.type){
        case "setList/add":
            return [
                ...state,
                action.payload                
            ]
        default:
            return state
    }
}