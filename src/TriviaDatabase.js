import { getAllByDisplayValue } from '@testing-library/react';
import Axios from 'axios'
import { useEffect, useState } from 'react';

export const GetQuestion = () => {
    const url = 'https://opentdb.com/api.php?amount=10'
    const [questions, setQuestions] = useState(null)

    useEffect(() => {
        Axios.get(url)
        .then((response) => {
            setQuestions(response.data)
            console.log(response.data.results[0].category)
        })
        
    }, [url])
    
    if(questions){
        return (

            <div>
                <h1>choose a category</h1>
                <div>
                    {questions.results[0].category}
                </div>
            </div>

        )
    }

    return (
        <></>
    )
}
