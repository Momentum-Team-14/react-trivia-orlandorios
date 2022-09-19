import React from "react";
import { useState, useEffect } from 'react'
import Axios from "axios";
import {Question} from './Question'
import Button from '@mui/material/Button';

export const Category = ({category, setCategory}) => {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        Axios.get(`https://opentdb.com/api.php?amount=10&category=${category}`)
        .then((response) => {
            setQuestions(response.data.results)
            console.log(response.data)
        })
    }, [category]) 
        
    return (
        <>
            <h2>Play a Trivia Game</h2>
            {questions.map((question, index) => (
                <Question key={index} question={question}/>
            ))}
        </>
    )
    }