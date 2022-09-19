import React, { useState } from 'react'
import { Option } from './Option'
import { RadioGroup } from '@mui/material'
import { htmlDecode, shuffleArray } from './utilities'
import { Button } from '@mui/material'

export const Question = ({question, onCorrect=() => {}, onIncorrect=() => {}}) => {

    const [options, _] = useState(shuffleArray([question.correct_answer, ...question.incorrect_answers]))
    const [answered, setAnswered] = useState(false)

    return (
        <>
        <p>{htmlDecode(question.question)}</p>  
        {options.map((option, index) => (
                        <div className="option-list" key={index}>
                        <Button 
                        variant='text'
                        color={!answered ? 'primary' :
                        question.correct_answer === option ? 'success' : 'error'}
                        onClick={() => {
                            setAnswered(true)
                if (question.correct_answer === option) {
                    onCorrect()
                }
                
                else {
                    onIncorrect()
                }

            }}>{htmlDecode(option)}</Button>
                        </div>
        ))}
        </>
    )
}

