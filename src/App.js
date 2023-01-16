
import './App.css';
import {useState} from "react"
function App() {
  let [count, setCount] = useState(0);
  return(
    <div className="App">
      <button onClick={()=>{setCount(++count); console.log(count)}}>Increase</button>
      <button onClick={()=>{setCount(--count); console.log(count)}}>Decrease</button>
      <button onClick={()=>{setCount(0);}}>Set to Zero</button>
      {count}
    </div>
  );
  }

  


export default App;
