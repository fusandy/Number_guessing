import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearNum, 
    clearRecord, 
    changeMax, 
    changeMin,
    clearRange,
    setList 
} from '../actions'

function ResultField(props){
    const { setInputName, setInputNumber, setShowList, showList, answer, min, max } = props
    const [ result, setResult ] = useState('')
    const dispatch = useDispatch()

    // get the name from the store
    // name = { name: '' }
    const selectName = state => state.setName.name
    const name = useSelector(selectName)



    // get the guessing array from store
    // record = [ { value: 0 , timer: 0 }, {}, {} ... ]
    const selectRecord = state => state.setRecord
    const record = useSelector(selectRecord)

    // calculate how many times
    const timeArr = record.map( ({timer}) => timer )
    const times = Math.max(...timeArr)

    // get the last answer
    const valueArr = record.map( ({value}) => value)
    const lastAnswer = valueArr[valueArr.length - 1]

    useEffect(() => {
        const result = resultHandler(lastAnswer, answer, min, max)
        setResult(result)
    }, [lastAnswer, min, max])

    // compare and show the result
    const resultHandler = (lastAnswer, answer) => {
        // initial answer = 0, empty string for the result.
        if (lastAnswer === 0) {
            return ''
        }
        if (lastAnswer !==0 && lastAnswer === answer) {
            dispatch(setList({ name:name, timer:times}))
            dispatch(clearNum())
            setInputName('')
            setInputNumber('')
            return '恭喜 答對了！'
        } 
        // wrong answer + range hint for the result
        if (lastAnswer > answer){
            dispatch(changeMax(lastAnswer))         
            return `小一點，${min} ~ ${max}`
        }
        if (lastAnswer < answer){
            dispatch(changeMin(lastAnswer))         
            return `大一點，${min} ~ ${max}`
        }
    }

    const replayHandler = () => {
        dispatch(clearRecord())
        dispatch(clearRange())
    }

    const showListHandler = () => {
        showList ? setShowList(false) : setShowList(true)
    }


    return(
        <>
            <div className="section">
                <p>累積次數: {times} 次 </p>
                <p>結果: {result} </p>
                <button onClick={replayHandler}>再玩一次</button>
                <button onClick={showListHandler}>查看排名</button>
            </div>
        </>
    )
}

export default ResultField