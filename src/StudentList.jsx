import Student from "./Student";

const StudentList = (props) => {
  return (
    <>
      {props.students.map(student => <Student student={student} key={student.name}/>)}
    </>
  )
}

export default StudentList
