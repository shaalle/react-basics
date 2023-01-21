
import './App.css';
import Axios from 'axios';
import {useEffect, useState} from "react"

function App() {
  const API_URL = 'https://catfact.ninja/fact';
  const [catFact, setCatFact] = useState("")

  // fetch(API_URL).then((res)=> res.json())
  // .then((data)=> console.log(data.fact))
  // Axios is a library which is used to make requests to an API Like Fetch Function in js
  const generateCatFact = () => {
    Axios.get(API_URL).then((res)=> setCatFact(res.data.fact));
  }
  useEffect(() => {
    generateCatFact();
  },[]);

  return(
    <div className="App">
      <button onClick={generateCatFact}>Generate Cat Fact</button>
     <p>{catFact}</p>
    </div>
  );
  }

  


export default App;
