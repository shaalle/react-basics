
import './App.css';
import Axios from 'axios';
import {useEffect, useState} from "react"

function App() {
  const API_URL = 'https://excuser-three.vercel.app/v1/excuse/';
  const [excuse, setExcuse] = useState("");
  
  const excuseGenerator = (name) => {
    Axios.get(`${API_URL}${name}`).then((res)=> {setExcuse(res.data[0].excuse)})
  }

  return(
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={() => excuseGenerator('party')}>Party</button>
      <button onClick={() => excuseGenerator('family')}>Family</button>
      <button onClick={() => excuseGenerator('office')}>Office</button>
      <p>{excuse}</p>
    </div>
  );
  }

  


export default App;
