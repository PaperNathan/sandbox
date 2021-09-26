import '../css/game.css'
import 'normalize.css'

import PlayArea from './PlayArea'
import Dice from './Dice'

function Board() {
  return (
    <main id="game-board">

      <div id="game-area" className="opponent-area">
        <PlayArea />
      </div>

      <div id="game-dice" className="opponent-dice">
        <Dice />
      </div>

      <div id="game-area" className="player-area">
        <PlayArea />
      </div>

      <div id="game-dice" className="player-dice">
        <Dice />
      </div>

    </main>
  )
}

export default Board