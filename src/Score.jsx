const Score = (props) => {
  return (
    <>
      <h3>Score Date: {props.student.scores.date}</h3>
      <h3>Score: {props.student.scores.score}</h3>
      
    </>
  )
}

export default Score