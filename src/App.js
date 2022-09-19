import './App.css';
import Button from '@mui/material/Button';
import { Categories } from './Categories';
import {useState, useEffect} from 'react';
import {Header} from './Header'
import { Category } from './Category';

function App() {
  const [category, setCategory] = useState(null)

  return (
    <div className="App">
      <>
      <Header />

      <div className='TriviaContent'>
      {(!category) ? <Categories setCategory={setCategory} /> :
      <Category category={category} setCategory={setCategory} />}
      </div>
      </>
    </div>
  )
}

export default App;
