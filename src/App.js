
import './App.css';
import Axios from 'axios';
import {useEffect, useState} from "react"

function App() {
  const API_URL = 'https://api.agify.io/?name=';
  const [name, setName] = useState("")
  const [predictedAge, setPredictedAge] = useState("0")
  
  const agePredictor = () => {
    Axios.get(`${API_URL}${name}`).then((res)=> {setPredictedAge(res.data.age)})
  }

  return(
    <div className="App">
      <input onChange={(event)=>{setName(event.target.value)}} placeholder='Enter your name...'/>
      <button onClick={agePredictor}>Predict Age</button>
     <h1>Predicted Age: {predictedAge}</h1>
    </div>
  );
  }

  


export default App;
