import './App.css';
import { studentList } from './data'
import { useState } from 'react'
import Student from './Student';

function App() {
  const [students, setStudentData] = useState(studentList)
  
  return (
    <div className='App'>
      {students.map(student => 
        <Student key={student.name} student={student} />
      )}
    </div>
  );
}

export default App
