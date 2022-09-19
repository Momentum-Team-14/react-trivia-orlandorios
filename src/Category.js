import React from "react";
import { useState, useEffect } from 'react'
import Axios from "axios";
import {Question} from './Question'
import Button from '@mui/material/Button';
import { Results } from "./Results";

export const Category = ({category, setCategory}) => {
    const [questions, setQuestions] = useState([])
    const [score , setScore] = useState(0)
    const [showResults, setShowResults] = useState(false)

    useEffect(() => {
        Axios.get(`https://opentdb.com/api.php?amount=10&category=${category}`)
        .then((response) => {
            setQuestions(response.data.results)
            console.log(response.data)
        })
    }, [category]) 
        
    return (

            showResults ? <Results score={score} questionAmount={questions.length} /> :

        <>  
            <h2>Let's Play Trivia!</h2>
            {questions.map((question, index) => (
                <Question onCorrect={() => {
                    setScore(score+1)
                }}key={index} question={question}/>
            ))}

            <Button onClick={() => 
            {setShowResults(true)}}
            variant="contained">
                Submit
            </Button>
        </>
    )
    }