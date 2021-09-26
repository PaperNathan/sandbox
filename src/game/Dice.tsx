import { useState } from 'react'

function Dice() {
  const [roll, setRoll] = useState(0);

  const rollDice = () => {
    return Math.floor(Math.random() * 20) + 1
  }

  return (
    <section id="dice-play-area">
      <div className="dice" onClick={() => setRoll(rollDice)}>
        { roll }
      </div>
    </section>
  )
}

export default Dice