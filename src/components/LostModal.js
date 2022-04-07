import './Modal.css'

export default function LostModal( {shuffleCards}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Sorry!</h3>
        <p>You flipped a few too many cards,</p>
        <p>a few too many times...</p>
        <p></p>
        <button className="play-again" onClick={shuffleCards}>Play Again</button>
      </div>
    </div>
  )
}
