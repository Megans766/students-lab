const Score = (props) => {
  return (
    <>
      <h3>Score Date: {props.score.date}</h3>
      <h3>Score: {props.score.score}</h3>
      
    </>
  )
}

export default Score