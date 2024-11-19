import './App.css';
import Header from './components/Header'
import {useState} from 'react';
import LeftSide from './components/LeftSide';
import students from '../src/data/StudentsDb'
import RightSide from './components/RightSide';

function App() {

  const [currentStudent, setCurrentStudent] = useState(students[0]);
  const [fontSize,setFontSize]=useState(16);

  const receiveStudent = (student)=>{
    setCurrentStudent(student)
  }

  return (
    <div style={{ fontSize: `${fontSize}px` }} className='App'>
      <Header/>  
      <div className='buttons'>
          <p>fontSize:</p>
          <button onClick={() => setFontSize(16)}>S</button>
          <button onClick={() => setFontSize(20)}>M</button>
          <button onClick={() => setFontSize(24)}>L</button>
      </div>  
      <hr/>

      <div className='outerDiv'>

      <div className='leftDiv'>
        <LeftSide students={students} setStudent={receiveStudent}/>
      </div>

      <RightSide student={currentStudent}/>

      </div>
            
    </div>
  );
}

export default App;
