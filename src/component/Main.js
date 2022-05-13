import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setName,
    setNum, 
    clearNum, 
    setRecord, 
    clearRecord, 
    changeMax, 
    changeMin,
    clearRange,
    setList 
} from '../actions'
import List from './List'

function Main(){
    const [ inputName, setInputName ] = useState('')
    const [ inputNumber, setInputNumber ] = useState('')
    const [ result, setResult ] = useState('')
    const [ error, setError ] = useState('')
    const [ showList, setShowList ] = useState(false)
    const dispatch = useDispatch()

    // get the name from the store
    // name = { name: '' }
    const selectName = state => state.setName.name
    const name = useSelector(selectName)

    // get the random answer from store
    // answer = { value : 0 }
    const selectAnswer = state => state.setNum.value
    const answer = useSelector(selectAnswer)  
    
    // get the guessing array from store
    // record = [ { value: 0 , timer: 0 }, {}, {} ... ]
    const selectRecord = state => state.setRecord
    const record = useSelector(selectRecord)

    // get the list
    // list = [ {name:XXX, timer: 5}, {}, {} ...]
    const selectList = state => state.setList
    const list = useSelector(selectList)
    
    // get the max and min from the range
    // range = { max: 50 , min: 1 }
    const selectRange = state => state.setRange
    const range = useSelector(selectRange)
    let { max, min } = range
    
    // calculate how many times
    const timeArr = record.map( ({timer}) => timer )
    const times = Math.max(...timeArr)
    
    // get the last answer
    const valueArr = record.map( ({value}) => value)
    const lastAnswer = valueArr[valueArr.length - 1]
    
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
    
    // get number input value
    const inputNumberHandler = (e) => {
        const inputNumber = e.target.value
        setInputNumber(inputNumber)
    }

    // submit the answer
    const submitHandler = (e) => {
        e.preventDefault()
        if(!inputNumber) return
        dispatch(setRecord(inputNumber))
    }

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
    useEffect(() => {
        const result = resultHandler(lastAnswer, answer, min, max)
        setResult(result)
    }, [lastAnswer, min, max])

    // input value is not allowed Chinese character
    const editHandler = (e) => {
        const charCode = e.which
        return ! charCode > 126
    }
    
    const replayHandler = () => {
        dispatch(clearRecord())
        dispatch(clearRange())
    }

    const showListHandler = () => {
        showList ? setShowList(false) : setShowList(true)
    }
    
    return (
        <>
            <div className="container">
                <h1>Number Guessing Game</h1>
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
                <div className="section">
                    <form onSubmit={submitHandler}>
                        <input
                            type="number"
                            name="answer"
                            value={inputNumber}
                            placeholder="Enter a number between 1 ~ 50"
                            disabled={ answer == 0 && `${"enabled"}`}
                            autoComplete="off"
                            onKeyPress={editHandler}
                            onChange={inputNumberHandler}
                        />
                        <button type='submit'>GUESS</button>
                    </form>
                </div>
                <div className="section">
                    <p>累積次數: {times} 次 </p>
                    <p>結果: {result} </p>
                    <button onClick={replayHandler}>再玩一次</button>
                    <button onClick={showListHandler}>查看排名</button>
                </div>
                <div className="section">
                    <List list={list} showList={showList}/>
                </div>
            </div>
        </>
    )
}

export default Main
