import './Modal.css'

export default function LostModal( {shuffleCards}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Sorry...you took too many turns!</h3>
        <button className="play-again" onClick={shuffleCards}>Play Again</button>
      </div>
    </div>
  )
}
