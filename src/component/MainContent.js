import { useState } from 'react'
import { useSelector } from 'react-redux'
import NameField from './NameField';
import GuessField from './GuessField'
import ResultField from './ResultField';
import ListField from './ListField'

function Main(){
    console.log('Main render ..')
    const [ inputName, setInputName ] = useState('')
    const [ inputNumber, setInputNumber ] = useState('')
    const [ success, setSuccess ] = useState(false)
    
    return (
        <>
            <h1>Number Guessing Game</h1>
            <NameField inputName={inputName} setInputName={setInputName} />
            <GuessField success={success} inputNumber={inputNumber} setInputNumber={setInputNumber} />
            <ResultField setSuccess={setSuccess} setInputName={setInputName} setInputNumber={setInputNumber} />    
            <ListField />
        </>
    )
}

export default Main


// 結構改變 ： NameField, GuessField 合併成一支component，並將再玩一次的按鈕移到該支元件中
// 測試每支元件的 render 次數，沒實際影響的 render 要避免
