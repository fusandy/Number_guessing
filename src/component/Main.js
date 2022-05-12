import { useSelector, useDispatch } from 'react-redux'
import { setNum, guessNum } from '../actions'

function Main(){
    let max = 50, min = 1;
    // get the random answer from store
    const selectAnswer = state => state.setNum.value
    const answer = useSelector(selectAnswer)

    // get the guessing array from store
    const selectRecord = state => state.guessNum
    const record = useSelector(selectRecord)   // [{value: , timer: }, {}, {} ...]
    
    // calculate how many times
    const timeArr = record.map( ({timer}) => timer )
    const times = Math.max(...timeArr)

    // get the last answer
    const valueArr = record.map( ({value}) => value)
    const lastAnswer = valueArr[valueArr.length - 1]

    const dispatch = useDispatch()
    // random a number and setAnswer
    const numberRunner = () => {
        const random = Math.ceil(Math.random()*50)
        dispatch(setNum(random))
    }

    // submit the answer
    const submitHandler = (e) => {
        e.preventDefault()
        const inputValue = document.querySelector('[name=answer]').value
        dispatch(guessNum(inputValue))
    }

    // compare and show the result
    // todo: max, min 用reducer紀錄，第一次猜的時候，dispatch改變max or min，第二次以後判斷答案是否有在更新的範圍內，然後根據answer決定要改變max or min
    const resultHander = (lastAnswer, answer)=>{
        if (lastAnswer === 0) {
            return ''
        } 
        if (lastAnswer === answer) {
            return '恭喜 答對了！'
        } 

        // if (lastAnswer > answer && lastAnswer > prevAnswer){
        //     max = lastAnswer
        //     return `小一點，${min} ~ ${max}`
        // } else if ( lastAnswer < answer && lastAnswer < prevAnswer){
        //     min = lastAnswer
        //     return `大一點，${min} ~ ${max}`
        // }
    }
    const result = resultHander(lastAnswer, answer)

    // input value is not allowed Chinese character
    const editHandler = (e) => {
        const charCode = e.which
        return ! charCode > 126
    }

    return (
        <>
            <div className="container">
                <div className="section">
                    <button onClick={numberRunner}>START</button>
                </div>
                <div className="section">
                    <form>
                        <input
                            type="number"
                            name="answer"
                            placeholder="Enter Your Number"
                            disabled={ answer == 0 && `${"enabled"}`}
                            autoComplete="off"
                            onKeyPress={editHandler}
                        />
                        <button onClick={submitHandler}>GUESS</button>
                    </form>
                </div>
                <div className="section">
                    <p>累積次數: {times} 次 </p>
                    <p>結果: {result} </p>
                </div>
            </div>
        </>
    )
}

export default Main