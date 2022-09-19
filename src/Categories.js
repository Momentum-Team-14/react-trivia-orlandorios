import Axios from 'axios'
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Categories.css'


export const Categories = ({setCategory}) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        Axios.get('https://opentdb.com/api_category.php')
        .then((response) => {
            setCategories(response.data.trivia_categories)
            console.log(response.data)
        })
    }, [])
    

    return (
            <>
                <h1>Choose A Category</h1>
                <div className='category-list'>
                    {categories.map((category) => (
                    <Button 
                    variant='text'
                    size='large'
                    key={category.id} 
                    onClick={() => {setCategory(category.id)}}>
                    {category.name}</Button>))}
                </div> 
            </>
            )
}