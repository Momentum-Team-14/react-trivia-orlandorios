import React, { useState } from 'react'
import { Option } from './Option'
import { RadioGroup } from '@mui/material'

export const Question = ({question}) => {

    const options = [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)


    return (
        <>
        <p>{question.question}</p>  
         {/* <RadioGroup> */}
        {options.map((option, index) => (
            <Option key={index} option={option}/>
        ))}
        {/* </RadioGroup> */}
        </>
    )
}

