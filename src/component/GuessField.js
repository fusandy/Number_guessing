import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setValueAndTimes } from '../actions'

function GuessField(props){
    console.log('GuessField render ..')
    const { success, inputNumber, setInputNumber } = props

    const [ error, setError ] = useState('')
    const dispatch = useDispatch()
    
    // get the random answer from store
    const answer = useSelector(state => state.answer) 

    // get the max and min from store
    const max = useSelector(state => state.max)
    const min = useSelector(state => state.min)

    // get times from store
    const times = useSelector(state => state.times)

    // get number input value
    const inputNumberHandler = (e) => {
        setError('')
        const inputNumber = (parseInt(e.target.value))
        setInputNumber(inputNumber)
    }

    // invalid message
    const invalidHandler = (e) => {
        e.preventDefault();
        if(inputNumber < 1){
            setError('輸入的數字不可小於1')
        }
        if(inputNumber > 50){
            setError('輸入的數字不可大於50')
        }
    }
    
    // submit answer
    const submitHandler = (e) => {
        e.preventDefault()
        if(!inputNumber) return
        if( inputNumber > min && inputNumber < max ) {
            dispatch(setValueAndTimes(inputNumber, times + 1))
        }else{
            setError(`請輸入${min}~${max}範圍的數字`)
        }
    }

    return (
        <>
            <div className="section">
                <form onSubmit={submitHandler} onInvalid={invalidHandler}>
                    <input
                        type="number"
                        name="answer"
                        value={inputNumber}
                        placeholder="請輸入介於1~50之間的數字"
                        autoComplete="off"
                        onChange={inputNumberHandler}
                        min="1"
                        max="50"
                        disabled={ answer === 0 || success }
                    />
                    <button type='submit' disabled={ answer === 0 || success }>猜數字</button>
                    {error && <p>{error}</p>}
                </form>
            </div>
        </>
    )
}

export default GuessField