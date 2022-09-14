import { getAllByDisplayValue } from '@testing-library/react';
import Axios from 'axios'
import { useEffect, useState } from 'react';

export const CategoryList = () => {
    const url = 'https://opentdb.com/api_category.php'
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        Axios.get(url)
        .then((response) => {
            setCategories(response.data.trivia_categories)
            console.log(response.data)
        })
    }, [url])

    // const handleSelectedQuestion = (question) => {
    //     setQuestions(question)
    // }
    
    if(categories){
        return (
            <div>
                <h1>choose a category</h1>
                <div>
                    {categories.map((category) => <p key={category.id}>{category.name}</p> )}
                </div>
            </div>

        )
    }

    return (
        <></>
    )
}
