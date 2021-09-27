function Card(props: any) {
  const image = require(`../images/${props.deck_id}/${props.card.image}`)

  return (
    <div className="card">
      <img className="cardImage" 
           src={image.default}
           alt={props.card.name} />
    </div>
  )
}

export default Card