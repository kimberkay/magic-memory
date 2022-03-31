import './Modal.css'
import confetti from 'canvas-confetti'



export default function WinModal( {shuffleCards}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>xoxo Kisses xoxo</h3>
        <h4>You Won!!!</h4>
        <button className="play-again" onClick={shuffleCards}>Play Again</button>
      </div>
    </div>
  )
}
