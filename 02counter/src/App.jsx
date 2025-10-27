import {useState} from 'react'
 
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);

  const addValue = () =>{
    if(counter==20){
      return;
    }else{
      setCounter(counter+1);
    } 
  };

  const removeValue = () =>{
    if (counter == 0) {
      return;
    }else{
     setCounter(counter-1)
    }
  };
  return (
    <>
      <h3>Show Counter Value from 0 to 20 </h3>
      <h2>Counter Value:{counter}</h2>
       <button onClick={addValue}>Add value</button>
       <br />
       <br />
       <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
