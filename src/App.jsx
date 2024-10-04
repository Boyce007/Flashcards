import { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './App.css'
import Card from './components/Card'
import NextButton from './components/NextButton';
import { cards } from './Cards'
import { shuffle } from './Shuffle';


function App() {
  const [isFront,setIsFront] = useState(true);
  const [index,setIndex] = useState(0);
  const [answer,setAnswer] = useState("");
  const [streak,setStreak] = useState(0);
  const [flashCards,setFlashCards] = useState(cards)

  const handleCardClick = ()=> {
    setIsFront(!isFront);
  }

  const handleButtonClickForward = () => {
    setIsFront(true);
    setIndex((index + 1) % cards.length); 
  }

  const handleButttonClickBack = () => {
    setIsFront(true)
    if (index == 0) {
      return;
    }
    setIndex((index - 1) % cards.length); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const isAnsCorrect = 
    const isClose =  cards[index][1].content.toLowerCase().includes(answer.toLowerCase())
    const isCorrect = answer.toLowerCase()  == cards[index][1].content.toLowerCase()
    if ( isCorrect || isClose) {
      setStreak(streak+1);
      alert("You are correct");
    } else {
      setStreak(0);
        alert("you are wrong")
    }
  }
  const handleShuffle = () => {
      setFlashCards(shuffle(cards))
  }
  
  return (
    <div>
      <h1>The ultimate Anime Fan! </h1>
      <h2>Test your Anime knowledge</h2>
      <h3>Number of cards:{cards.length}</h3>
      <p>Your current Streak is:{streak}</p>
      <div className='container'>
        <div onClick={handleCardClick} className='CardContainer'>
            { isFront?
              (<Card content={cards[index][0].content}/>):
              (<Card content={cards[index][1].content}/>)
            }
        </div>

        <div>
          <form action="">
            <input
            value={answer}
            type="text"
            name="Enter your answer"
            onChange={e => setAnswer(e.target.value)}
            />
            <button onClick={handleSubmit} type='submit'>Submit</button>
          </form>
        </div>

        <div className='buttonContainer'>
              <NextButton onClick={handleButttonClickBack} arrow = {<ArrowBackIcon/>}/>
              <NextButton onClick={handleButtonClickForward} arrow = {<ArrowForwardIcon/>}/>
              <NextButton onClick={handleShuffle} arrow={'shuffle'}/>
        </div>

      </div>
    </div>
  ) 
}

export default App
