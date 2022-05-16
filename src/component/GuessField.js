import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setRecord } from '../actions'

function GuessField(props){
    const { inputNumber, setInputNumber, answer, min, max } = props
    const [ error, setError ] = useState('')
    const dispatch = useDispatch()

    // get number input value
    const inputNumberHandler = (e) => {
        setError('')
        const inputNumber = parseInt(e.target.value)
        setInputNumber(inputNumber)
    }

    // invalid message set into error field
    const invalidHandler = (e) => {
        e.preventDefault();
        if(inputNumber < 1 || inputNumber > 50){
            setError('請輸入1~50之間的數字')
        }

    }
    
    // submit the answer
    const submitHandler = (e) => {
        e.preventDefault()
        if(!inputNumber) return
        if( inputNumber > min && inputNumber < max ) {
            dispatch(setRecord(inputNumber))
        }else{
            setError('請輸入符合區間範圍的數字')
        }
        
    }

    // input value is not allowed Chinese character
    // const editHandler = (e) => {
    //     const charCode = e.which
    //     return ! charCode > 126
    // }

    return (
        <>
            <div className="section">
                <form onSubmit={submitHandler} onInvalid={invalidHandler}>
                    <input
                        type="number"
                        name="answer"
                        value={inputNumber}
                        placeholder="Enter a number between 1 ~ 50"
                        disabled={ answer == 0 && `${"enabled"}`}
                        autoComplete="off"
                        // onKeyPress={editHandler}
                        onChange={inputNumberHandler}
                        min="1"
                        max="50"
                    />
                    <button type='submit'>GUESS</button>
                    <p>{error}</p>
                </form>
            </div>
        </>
    )
}

export default GuessField