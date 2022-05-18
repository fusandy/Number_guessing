import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNameAndAnswer, setValueAndTimes, setSuccess, reset } from '../actions'


function InputField(props) {
    console.log('InputField render ..')

    const [ inputName, setInputName ] = useState('')
    const [ inputNumber, setInputNumber ] = useState('')

    const [ nameError, setNameError ] = useState('')
    const [ numberError, setNumberError ] = useState('')

    const dispatch = useDispatch()

    // get answer from store
    const answer = useSelector(state => state.answer) 

    // get nameList from store
    const nameList = useSelector(state => state.list.map(({name}) => name))

    // get max and min from store
    const max = useSelector(state => state.max)
    const min = useSelector(state => state.min)

    // get times from store
    const times = useSelector(state => state.times)

    // get success boolean from store
    const success = useSelector(state => state.success)

    // get input name
    const inputNameHandler = (e) => {
        setNameError('')
        const inputName = e.target.value
        setInputName(inputName)
    }

    // get input number
    const inputNumberHandler = (e) => {
        setNumberError('')
        const inputNumber = (parseInt(e.target.value))
        setInputNumber(inputNumber)
    }
        
    // random a number and setAnswer
    const numberRunner = () => {
        if(!inputName  || /^\s/.test(inputName)) {
            setNameError('名稱不可空白。')
            return
        }
        if(nameList.includes(inputName)){
            setNameError('名稱重複，請重新輸入。')
            return
        }
    
        const random = Math.ceil(Math.random()*50)
        dispatch(setNameAndAnswer(inputName, random))
    }

    // submit answer
    const submitHandler = (e) => {
        e.preventDefault()
        if(!inputNumber) return
        if( inputNumber > min && inputNumber < max ) {
            dispatch(setValueAndTimes(inputNumber, times + 1))
        }else{
            setNumberError(`請輸入${min}~${max}範圍的數字`)
        }
    }

    // invalid message
    const invalidHandler = (e) => {
        e.preventDefault();
        if(inputNumber < 1){
            setNumberError('輸入的數字不可小於1')
        }
        if(inputNumber > 50){
            setNumberError('輸入的數字不可大於50')
        }
    }

    // replay
    const replayHandler = () => {
        setInputName('')
        setInputNumber('')
        dispatch(setSuccess(false))
        dispatch(reset())
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
                    onChange={ inputNameHandler }
                    readOnly={ answer !== 0 }
                />
                <button onClick={ numberRunner } disabled={ answer !== 0 }>遊戲開始</button>
                { nameError && <p>{nameError}</p> }
                <form onSubmit={ submitHandler } onInvalid={ invalidHandler }>
                    <input
                        type="number"
                        name="answer"
                        value={inputNumber}
                        placeholder="請輸入介於1~50之間的數字"
                        autoComplete="off"
                        onChange={ inputNumberHandler }
                        min="1"
                        max="50"
                        disabled={ answer === 0 || success }
                    />
                    <button type='submit' disabled={ answer === 0 || success }>猜數字</button>
                    { numberError && <p>{numberError}</p> }
                </form>
            </div>
            <div className="section">
                <button onClick={replayHandler}>再玩一次</button>
            </div>
        </>
    )
}

export default InputField;