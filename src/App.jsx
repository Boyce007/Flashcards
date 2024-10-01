import { useState } from 'react'

import './App.css'
import Card from './components/Card'
function App() {
  const [isFront, setIsFront] = useState(true);

  const handleClick = ()=> {
    setIsFront(!isFront);
  }
  return (
    <div>
      <h1>Flashcards</h1>
      <h2>Test your knowledge</h2>
      <div onClick={handleClick} className='container'>
        { isFront?
          <Card content="Front"/> :
          <Card content="Back"/>
        }
        
      </div>
    </div>
  )
}

export default App
