import './App.css';
import Button from '@mui/material/Button';
import { Categories } from './SelectCategory';
import {useState, useEffect} from 'react';
import {Header} from './Header'
import { TriviaGame } from './TriviaGame';

function App() {
  const [category, setCategory] = useState(null)

  return (
    <div className="App">
      <>
      <Header />

      <div className='TriviaContent'>
      {(!category) ? <Categories setCategory={setCategory} /> :
      <TriviaGame category={category} setCategory={setCategory} />}
      </div>
      </>
    </div>
  )
}

export default App;
