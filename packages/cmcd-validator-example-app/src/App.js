import { useState } from 'react';
import { CMCDQueryValidator } from '@montevideo-tech/cmcd-validator';
import './App.css';

function App() {

  const [queryString, setQueryString] = useState('');
  const [output, setOutput] = useState({});
  
  const test = () => {
    console.log(queryString);
    setOutput(CMCDQueryValidator(queryString));
    console.log(output);
  }

  const updateQueryString = (input) =>{
    setQueryString(input.target.value);
  } 

  return (
    <div className="App">
      <h1>Query validator</h1>
      <input type='text' value={queryString} onChange={(e) => updateQueryString(e)}/>
      <button onClick={() => test()}>Query Check</button>
    </div>
  );
}

export default App;
