import Score from './Score'

const Student = (props) => {
  return (
    <>
      <h2>{props.student.name}</h2>
      <p>{props.student.bio}</p>

      {/* <Score /> */}

    </>
  )
}

export default Student
