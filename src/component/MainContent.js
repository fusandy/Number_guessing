import { useState } from 'react'
import InputField from './InputField';
// import GuessField from './GuessField'
import ResultField from './ResultField';
import ListField from './ListField'

function Main(){
    console.log('Main render ..')
    // const [ inputName, setInputName ] = useState('')
    // const [ inputNumber, setInputNumber ] = useState('')
    // const [ success, setSuccess ] = useState(false)
    
    return (
        <>
            <h1>Number Guessing Game</h1>
            <InputField  />
            {/* <GuessField success={success} inputNumber={inputNumber} setInputNumber={setInputNumber} /> */}
            <ResultField />    
            <ListField />
        </>
    )
}

export default Main

