import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setName,
    setNum, 
    clearRecord, 
    clearRange
} from '../actions'


function NameField(props) {
    const { inputName, setInputName, list } = props
    const [ error, setError ] = useState('')
    const dispatch = useDispatch()

    // get name input value
    const inputNameHandler = (e) => {
        setError('')
        const inputName = e.target.value
        const nameList = list.map(({name})=>name)
        if(nameList.includes(inputName)){
            setError('姓名重複，請重新輸入。')
        } else {
            setInputName(inputName)
        }
    }
        
    // random a number and setAnswer
    const numberRunner = () => {
        if (!inputName  || /^\s/.test(inputName)) {
            setError('姓名不可空白。')
            return
        }
            
        const random = Math.ceil(Math.random()*50)
        dispatch(clearRecord())
        dispatch(clearRange())
        dispatch(setNum(random))
        dispatch(setName(inputName))
    }


    return (
        <>
            <div className="section">
                <input type="text" 
                    name="user" 
                    id="user"
                    value={inputName}
                    placeholder="Enter your name"
                    onChange={inputNameHandler}
                />
                <button onClick={numberRunner}>START</button>
                <p>{error}</p>
            </div>
        </>
    )
}

export default NameField;