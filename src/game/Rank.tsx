import '../css/game.css'

function Rank(props: any) {
  return (
    <section className={`rank rank-${props.rank}`}>
      { props.children }
    </section>
  )
}

export default Rank