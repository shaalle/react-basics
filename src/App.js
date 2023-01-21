
import './App.css';
import Axios from 'axios';
import {useEffect, useState} from "react"

function App() {
  const API_URL = 'https://api.agify.io/?name=';
  const [name, setName] = useState("")
  const [predictedAge, setPredictedAge] = useState(null)
  
  const agePredictor = () => {
    Axios.get(`${API_URL}${name}`).then((res)=> {setPredictedAge(res.data)})
  }

  return(
    <div className="App">
      <input onChange={(event)=>{setName(event.target.value)}} placeholder='Enter your name...'/>
      <button onClick={agePredictor}>Predict Age</button>
     <p>Predicted Name: {predictedAge?.name}</p>
     <p>Predicted Age: {predictedAge?.age}</p>
     <p>Predicted Count: {predictedAge?.count}</p>
    </div>
  );
  }

  


export default App;
