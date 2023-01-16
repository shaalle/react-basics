<!-- ------------ Example 1 ----------------------------------------- -->

<!-- 

import './App.css';

function App() {
  const age = 18;
  if(age >= 18){
    return <h1 className='App'>Over Age</h1>
  }
  else
    return (
      <div className="App">
        <div>
          <User name="Sucdi" age={28} email="drssucdi@gmail.com"/>
          <User name="Jamaal" age={39} email="jamal@gmail.com"/>
          <User name="Ridwaan" age={16} email="Rid@gmail.com"/>
          <Jobs salary={90000} position="Senior SDE" company="Amazon"/>
        </div>
      </div>
    );

}
// This is a Component 
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
}

const Jobs = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  )
}
export default App; -->
<!-- ------------ Example 2 ----------------------------------------- -->


<!-- import './App.css';

function App() {
  const age = 17;
  const isGreen = false;
  
  return(
    <div className='App'>
      {age >=18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}>THIS HAS A COLOR</h1>
      {/* This line equals if statement */}
      {isGreen && <button>THIS IS A BUTTON</button>}
    </div>
  );

}

export default App; -->

<!-- ------------ Example 3 ----------------------------------------- -->


<!-- import './App.css';

function App() {
  const names = ["Pedro","Jessica","Jake","Mike","Dustin","Lukas"];
  
  return(
    <div className='App'>
      {names.map((name,key) => {
        return <h1>{name}</h1>
      })}
    </div>
  );

}

export default App; -->

<!-- ------------ Example 4 ----------------------------------------- -->


<!-- import './App.css';

function App() {
  const Users = [
    {name: "Sucdi", age: 18},
    {name: "Ramlo", age: 21},
    {name: "Amiin", age:35},
  ];
  
  return(
    <div className="App">
      {Users.map((user,key) => {
        return <User name={user.name} age={user.age} />
      })}
    </div>
  );

}

const User = (props) => {
  return(
    <div>
      {props.name} {props.age}
      </div>
  );
}

export default App; -->

<!-- ------------ Example 5 ----------------------------------------- -->


<!-- import './App.css';

function App() {
  const Planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
  ];
  
  return(
    <div className="App" style={{fontSize: "1.9rem"}}>
      {Planets.map((planet,key) => {
        return <Planet name={planet.isGasPlanet && planet.name} />
      })}
    </div>
  );

}

const Planet = (props) => {
  return(
    <div>
      {props.name} {props.isGasPlanet}
      </div>
  );
}

export default App; -->

<!-- ------------ Example 6: State ----------------------------------------- -->

<!-- 
import './App.css';
import {useState} from "react"
function App() {
  const [age, setAge] = useState(0);
  const increaseAge = () =>{
    setAge(age + 1)
  }

  return(
    <div className="App" style={{fontSize: "1.9rem"}}>
      {age}
      <button onClick={increaseAge} >Increase Age</button>
    </div>
  );

}


export default App; -->

<!-- ------------ Example 7: State ----------------------------------------- -->


<!-- import './App.css';
import {useState} from "react"
function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return(
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      {inputValue}
    </div>
  );

}


export default App; -->

<!-- ------------ Example 8: State: Show/Hide Text ----------------------------------------- -->


<!-- import './App.css';
import {useState} from "react"
function App() {
  const [showText, setShowText] = useState(true);
  const toggleText = () => {
    // showText ? setShowText(false) : setShowText(true)
    setShowText(!showText)
    console.log(!showText)
  }

  return(
    <div className="App">
      <button onClick={toggleText}>Show/Hide</button>
      {showText && <h1>My name is Shaalle!</h1>}
    </div>
  );

}


export default App; -->

