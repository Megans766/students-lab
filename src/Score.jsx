const Score = (props) => {
  return (
    <>
      <h3>Score Date: {props.studentData.scores.date}</h3>
      <h3>Score: {props.studentData.scores.score}</h3>
    </>
  )
}

export default Score