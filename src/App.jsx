import { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './App.css'
import Card from './components/Card'
import NextButton from './components/NextButton'
import { cards } from './Cards'

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
function App() {
  const [isFront, setIsFront] = useState(true);
  const [index,setIndex] = useState(0)
  const handleCardClick = ()=> {
    setIsFront(!isFront);
  }
  const handleButtonClick = () => {
    setIsFront(true); // Reset the card to front when moving to the next
    setIndex(getRandomIntInclusive(0,9));
  }
  
  return (
    <div>
      
      <h1>The ultimate Anime Fan! </h1>
      <h2>Test your Anime knowledge</h2>
      <h3>Number of cards:{cards.length}</h3>
      <div className='container'>
        <div onClick={handleCardClick} className='CardContainer'>
            { isFront?
              (<Card content={cards[index][0].content}/>) :
              (<Card content={cards[index][1].content}/>)
            }
        </div>
        <div className='buttonContainer'>
              <NextButton onClick={handleButtonClick} arrow = {<ArrowForwardIcon/>}/>
        </div>

      </div>
    </div>
  )
}

export default App
