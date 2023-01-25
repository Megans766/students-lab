import Score from './Score'

const Student = (props) => {
  return (
    <>
      <h2>Student name: {props.student.name}</h2>
      <p>Student Bio: {props.student.bio}</p>

      {/* <Score /> */}

      {/* {props.students.map(score => 
        <Score score={score}/>)} */}

    </>
  )
}

export default Student
