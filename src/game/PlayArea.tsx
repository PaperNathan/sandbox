import '../css/game.css'

import Rank from './Rank'
import Card from './Card'

function PlayArea(props: any) {
  const cardBuilder = (card: any, deck_id: string) => {
    let rankBuilder = []
    for (let i=0; i<card.count; i++) {
      rankBuilder.push(<Card card={card} deck_id={deck_id} />)
    }
    return rankBuilder
  }

  return (
    <section className="play-area">
      <Rank rank={"1"}>
        {
          props.deck.first_rank.map((cardInfo: any) => cardBuilder(cardInfo, props.deck.deck_id))
        }
      </Rank>

      <Rank rank={"2"}>
        {
          props.deck.second_rank.map((cardInfo: any) => cardBuilder(cardInfo, props.deck.deck_id))
        }
      </Rank>

      <Rank rank={"3"}>
        {
          props.deck.warlord.map((cardInfo: any) => cardBuilder(cardInfo, props.deck.deck_id))
        }      
      </Rank>
    </section>
  )
}

export default PlayArea