import { useState, useEffect } from 'react'
import SingleCard from './components/SingleCard'
import LostModal from './components/LostModal'
import WinModal from './components/WinModal'
import './App.css'


const cardImages = [
  { "src": "/img/lou-in-snow.png", matched: false },
  { "src": "/img/jo-in-snow.png", matched: false },
  { "src": "/img/lou-sunglasses.png", matched: false },
  { "src": "/img/rain-boots.png", matched: false }, 
  { "src": "/img/jojo-goggles.png", matched: false },
  { "src": "/img/beach-babies.png", matched: false }
]


function App() {
const [ cards, setCards ] = useState([])
const [ turns, setTurns ] = useState(0)
const [ choiceOne, setChoiceOne ] = useState(null)
const [ choiceTwo, setChoiceTwo ] = useState(null)
const [ disabled, setDisabled ] = useState(false)
const [ lostModal, setLostModal ] = useState(false)
const [ winModal, setWinModal ] = useState(false)
const [ showButton, setShowButton ] = useState(true)



  //shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=> Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setShowButton(true)
    setCards(shuffledCards)
    setTurns(0)
    setLostModal(false)
    setWinModal(false)
  }

  //handle picking cards
const handleChoice =(card)=>{
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}


//compare 2 selected cards
useEffect(() => {

  if(choiceOne && choiceTwo) {
    setDisabled(true)
    if(choiceOne.src === choiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card => {
          if(card.src === choiceOne.src) {
            return { ...card, matched: true }
          } else {
            return card
          }
        })
      })
      resetTurn();
      } else {
      setTimeout(()=>resetTurn(),1000)
  }
}
}, [choiceOne, choiceTwo])

const winner = cards.filter(card => card.matched === true).length


useEffect(() => {
  if(turns === 14) {
    setLostModal(true)
    setCards([])
    setShowButton(false)
  } else if(winner === 12) {
      setWinModal(true)
      setShowButton(false)
    } else {
    }
  
}, [turns, winner])
  


const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
  setDisabled(false)
  }



  return (
    <div className="App">
      <h1>Sisters</h1>
      {showButton && (
        <button onClick={shuffleCards}>New Game</button>
      )}

      {lostModal && (
      <LostModal shuffleCards={shuffleCards} />
      )}

      {winModal && (
        <WinModal shuffleCards={shuffleCards} />
      )}

      <div className="card-grid">
        {cards.map(card=> (
          <SingleCard 
          key={card.id}
          card={card}
          handleChoice={handleChoice} 
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
          /> 
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}


//player must make all matches in 15 turns or they lose game
export default App