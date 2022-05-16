import { useState } from 'react'
import { useSelector } from 'react-redux'
import NameField from './NameField';
import GuessField from './GuessField'
import ResultField from './ResultField';
import ListField from './ListField'

function Main(){
    const [ inputName, setInputName ] = useState('')
    const [ inputNumber, setInputNumber ] = useState('')
    const [ showList, setShowList ] = useState(false)

    // get the max and min from the range
    // range = { max: 50 , min: 1 }
    const selectRange = state => state.setRange
    const range = useSelector(selectRange)
    let { max, min } = range

    // get the random answer from store
    // answer = { value : 0 }
    const selectAnswer = state => state.setNum.value
    const answer = useSelector(selectAnswer)  
    
    // get the list
    // list = [ {name:XXX, timer: 5}, {}, {} ...]
    const selectList = state => state.setList
    const list = useSelector(selectList)
    
    
    return (
        <>
            <h1>Number Guessing Game</h1>
            <NameField inputName={inputName} setInputName={setInputName} list={list}/>
            <GuessField inputNumber={inputNumber} setInputNumber={setInputNumber} answer={answer} min={min} max={max}/>
            <ResultField setInputName={setInputName} setInputNumber={setInputNumber} setShowList={setShowList} showList={showList} answer={answer} min={min} max={max}/>    
            <ListField list={list} showList={showList}/>
        </>
    )
}

export default Main
