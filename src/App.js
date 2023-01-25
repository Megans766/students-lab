import './App.css';
import { studentList } from './data'
import { useState } from 'react'
import StudentList from './StudentList';

function App() {
  const [studentData, setStudentData] = useState(studentList)
  
  return (
    <div className="App">
      <StudentList students={studentData}/>
    </div>
  );
}

export default App;
