import '../css/game.css'
import 'normalize.css'

import PlayArea from './PlayArea'
import Dice from './Dice'

import deckOne from '../data/deck_1.json'
import deckTwo from '../data/deck_2.json'

function Board() {
  return (
    <main id="game-board">

      <div id="game-area" className="opponent-area">
        <PlayArea deck={deckOne} />
      </div>

      <div id="game-dice" className="opponent-dice">
        <Dice />
      </div>

      <div id="game-area" className="player-area">
        <PlayArea deck={deckOne} />
      </div>

      <div id="game-dice" className="player-dice">
        <Dice />
      </div>

    </main>
  )
}

export default Board