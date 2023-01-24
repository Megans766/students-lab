

const Student = (props) => {
  return (
    <>
      <h2>Student name: {props.student.name}</h2>
      <p>Student Bio: {props.student.bio}</p>
    </>
  )
}

export default Student