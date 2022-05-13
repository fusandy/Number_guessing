const initialName = { name:'' }

export default function setNameReducer(state=initialName, action){
    switch (action.type){
        case "setName":
            return {...state, name: action.payload}
        case "clearName":
            return initialName
        default:
            return state;
    }
}