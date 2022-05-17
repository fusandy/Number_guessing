import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNameAndAnswer } from '../actions'


function NameField(props) {
    const { inputName, setInputName } = props
    const [ error, setError ] = useState('')
    const dispatch = useDispatch()

    // get the random answer from store
    const answer = useSelector(state => state.answer) 

    // get nameList from store
    const nameList = useSelector(state => state.list.map(({name}) => name))

    // get input value
    const inputNameHandler = (e) => {
        setError('')
        const inputName = e.target.value
        setInputName(inputName)
    }
        
    // random a number and setAnswer
    const numberRunner = () => {
        if(!inputName  || /^\s/.test(inputName)) {
            setError('姓名不可空白。')
            return
        }
        if(nameList.includes(inputName)){
            setError('姓名重複，請重新輸入。')
            return
        }
            
        const random = Math.ceil(Math.random()*50)
        dispatch(setNameAndAnswer(inputName, random))
    }

    return (
        <>
            <div className="section">
                <input type="text" 
                    name="user" 
                    id="user"
                    value={inputName}
                    autoComplete="off"
                    placeholder="請輸入姓名或暱稱"
                    onChange={inputNameHandler}
                    readOnly={ answer !== 0 }
                />
                <button onClick={numberRunner} disabled={ answer !== 0 }>遊戲開始</button>
                {error && <p>{error}</p>}
            </div>
        </>
    )
}

export default NameField;