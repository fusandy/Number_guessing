import { useState } from 'react'
import { useSelector } from 'react-redux'
import NameField from './NameField';
import GuessField from './GuessField'
import ResultField from './ResultField';
import ListField from './ListField'

function Main(){
    const [ inputName, setInputName ] = useState('')
    const [ inputNumber, setInputNumber ] = useState('')
    const [ success, setSuccess ] = useState(false)
    
    return (
        <>
            <h1>Number Guessing Game</h1>
            <NameField inputName={inputName} setInputName={setInputName}/>
            <GuessField success={success} inputNumber={inputNumber} setInputNumber={setInputNumber}/>
            <ResultField setSuccess={setSuccess} setInputName={setInputName} setInputNumber={setInputNumber}/>    
            <ListField />
        </>
    )
}

export default Main


// inputName inputNumber showList 調整到獨立component裡面  
// 向store取資料回歸到各元件  -- ok
// combineReducers物件不要用動詞  -- ok
// 將名字重複判與否移到numberRunner裡面  -- ok
// replayHandler 清空  -- ok
// reducer簡化為一個，action.type只有三個 set, reset, addRanks  -- ok
// UI design調整名字input與start btn，在遊戲結束前都要disabled  -- ok
// 答對的時候，全部的input都變成disabled  -- ok
