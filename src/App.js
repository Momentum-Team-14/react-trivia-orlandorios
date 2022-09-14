import './App.css';
import { GetQuestion } from './TriviaDatabase'


function App() {
  return (
    <div className="App">
      <h1>TRIVIA!</h1>
      <GetQuestion />
    </div>
  )
}

export default App;
