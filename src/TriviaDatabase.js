import { getAllByDisplayValue } from '@testing-library/react';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import { TriviaQuestions } from './TriviaQuestions';

export const Trivia = () => {
    const categoryUrl = 'https://opentdb.com/api_category.php'
    const [categories, setCategories] = useState([])
    const [questions, setQuestions] = useState([])
    const [currentCategory, setCurrentCategory] = useState(null)
    const questionsUrl = 'https://opentdb.com/api.php?amount=10&category='

    useEffect(() => {
        Axios.get(categoryUrl)
        .then((response) => {
            setCategories(response.data.trivia_categories)
            console.log(response.data)
        })
    }, [])

    useEffect(() => {
        if (currentCategory != null) {
        Axios.get(questionsUrl+currentCategory)
        .then((response) => {
            setQuestions(response.data.results)
            console.log(response.data.results)
        })}
    }, [currentCategory])
    
    if(currentCategory === null) {
            return (
            <div>
                <h1>choose a category</h1>
                <div className='category-button'>
                    {categories.map((category) => <button onClick={() => {setCurrentCategory(category.id)}} key={category.id}>{category.name}</button> )}
                </div>
            </div>
            )
    }

    return (
            <TriviaQuestions questions={questions} />
    )
}
