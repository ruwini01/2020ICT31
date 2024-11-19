import './App.css';
import Header from './components/Header'
import {useState} from 'react';

function App() {

  const [fontSize,setFontSize]=useState(16);

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

      
    </div>
  );
}

export default App;
