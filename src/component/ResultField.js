import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeMax, changeMin, setSuccess, setList } from '../actions'

function ResultField(props){
    console.log('ResultField render ..')
    const [ result, setResult ] = useState('')
    const dispatch = useDispatch()

    // // get the name from store
    // const name = useSelector(state => state.name)

    // get the random answer from store
    const answer = useSelector(state => state.answer) 

    // get the max and min from store
    const max = useSelector(state => state.max)
    const min = useSelector(state => state.min)

    //  get times from store
    const times = useSelector(state => state.times)

    // get input answer from store
    const value = useSelector(state => state.value)

    useEffect(() => {
        const result = resultHandler(value, answer)
        setResult(result)
    }, [value, min, max])

    // compare and show the result
    const resultHandler = (value, answer) => {
        if (value === 0) {
            return ''
        }
        if (value === answer) {
            dispatch(setSuccess(true))
            dispatch(setList())
            return '恭喜 答對了！'
        } 
        // wrong answer + range hint for the result
        if (value > answer){
            dispatch(changeMax(value))         
            return `小一點，${min} ~ ${max}`
        }
        if (value < answer){
            dispatch(changeMin(value))         
            return `大一點，${min} ~ ${max}`
        }
    }

    return(
        <>
            <div className="section">
                <p>累積次數: {times} 次 </p>
                <p>結果: {result} </p>
            </div>
        </>
    )
}

export default ResultField