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

<!-- ------------ Example 9: State: Counter App ----------------------------------------- -->


<!-- import './App.css';
import {useState} from "react"
function App() {
  const [count, setCount] = useState(0);
  const increase = ()=>{setCount(count + 1);}
  const decrease = ()=>{setCount(count - 1);}
  const setToZero = ()=>{setCount(0);}
  
  return(
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>
      {count}
    </div>
  );
  }

  


export default App; -->

<!-- ------------ Example 10: State: TodoList App P1 ----------------------------------------- -->


<!-- import './App.css';
import {useState} from "react"
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    // const newTodoList = [...todoList, newTask];
    setTodoList([...todoList, newTask]);
  }

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      // if(task === taskName){
      //   return false
      // }else{
      //   return true
      // }
      // This code is equivalent to the above if else 
      return task !== taskName; 
    });

    setTodoList(newTodoList);
  }

  return(
    <div className="App">
     <div className="addTask">
      <input onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
     </div>
     <div className="list">
      {todoList.map((task)=>{
        return <div>
          <h1>{task}</h1>
          <button onClick={() => deleteTask(task)}>X</button>
        </div>;
      })}
     </div>
    </div>
  );
  }

  


export default App; -->

<!-- ------------ Example 10: State: TodoList App P2 ----------------------------------------- -->
<!-- 

import './App.css';
import './Todo.css';
import {useState} from "react"
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [activeTasks, setActiveTasks] = useState(0)
  const date = new Date();
  const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const dayName = daysOfWeek[date.getDay()];
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const todaysDate = `${dayName}, ${month} ${day}`;
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };

    if(newTask === "" || newTask === 0){
      alert('Please enter a task')
    }else{
      setTodoList([...todoList, task]);
      setActiveTasks(todoList.length + 1);
    }
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) =>  task.id !== id);
    setTodoList(newTodoList);
    setActiveTasks(todoList.length - 1);
  }

  

  return(
    <div className="App">
      <div className="container">
        
      
     <div className="addTask">
     <p class="date">{todaysDate}</p>
     <p class="number-of-tasks">{activeTasks} Active Tasks</p>
      <input onChange={handleChange} placeholder="Enter a task..."/>
      <button onClick={addTask}>Add Task</button>
      
     </div>
     <div className="list">
      {todoList.map((task)=>{
        return<div className="task">
          
          <p>{task.taskName}</p>
          {/* <button onClick={() => deleteTask(task.id)}> */}
          <svg onClick={() => deleteTask(task.id)} class="trash-can" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none"><path fill="#8D9196" d="M17.4 2.7h-4v-.6c0-1.2-.9-2.1-2-2.1H7.6a2 2 0 0 0-2 2v.7h-4c-.3 0-.5.3-.5.6s.2.5.5.5h1v12.4c0 1.5 1.2 2.8 2.8 2.8h8.2c1.6 0 2.9-1.3 2.9-2.8V3.8h1c.2 0 .4-.2.4-.5s-.2-.6-.5-.6zM6.6 2.1c0-.6.5-1 1-1h3.8c.5 0 1 .4 1 1v.6H6.6v-.6zm8.8 14c0 1-.8 1.8-1.8 1.8H5.4c-1 0-1.8-.7-1.8-1.7V3.8h11.8v12.4z"></path><path fill="#8D9196" d="M9.5 16c.3 0 .5-.2.5-.5V6.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v9.3c0 .3.2.6.5.6zM6 15.5c.4 0 .6-.3.6-.6V6.8c0-.3-.2-.5-.5-.5s-.6.2-.6.5v8.1c0 .3.3.6.6.6zM13 15.5c.2 0 .5-.3.5-.6V6.8c0-.3-.3-.5-.6-.5s-.5.2-.5.5v8.1c0 .3.2.6.5.6z"></path></svg>
          {/* </button> */}
        </div>;
      })}
     </div>
     </div>
    </div>
  );
  }

  


export default App; -->

<!-- ------------ Example 10: State: TodoList App Using Component P3 ----------------------------------------- -->
<!-- 

import './App.css';
import './Todo.css';
import {Task} from './Task';
import {useState} from "react"
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [activeTasks, setActiveTasks] = useState(0)
  const date = new Date();
  const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const dayName = daysOfWeek[date.getDay()];
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const todaysDate = `${dayName}, ${month} ${day}`;
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };

    if(newTask === "" || newTask === 0){
      alert('Please enter a task')
    }else{
      setTodoList([...todoList, task]);
      setActiveTasks(todoList.length + 1);
    }
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) =>  task.id !== id);
    setTodoList(newTodoList);
    setActiveTasks(todoList.length - 1);
  }

  

  return(
    <div className="App">
      <div className="container">
        
      
     <div className="addTask">
     <p class="date">{todaysDate}</p>
     <p class="number-of-tasks">{activeTasks} Active Tasks</p>
      <input onChange={handleChange} placeholder="Enter a task..."/>
      <button onClick={addTask}>Add Task</button>
      
     </div>
     <div className="list">
      {todoList.map((task)=>{
        return (<Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
        );
      })}
     </div>
     </div>
    </div>
  );
  }

  


export default App; 


// This is a Component
export const Task = (props) => {
    return<div className="task">
          
          <p>{props.taskName}</p>
          <svg onClick={() => props.deleteTask(props.id)} class="trash-can" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none"><path fill="#8D9196" d="M17.4 2.7h-4v-.6c0-1.2-.9-2.1-2-2.1H7.6a2 2 0 0 0-2 2v.7h-4c-.3 0-.5.3-.5.6s.2.5.5.5h1v12.4c0 1.5 1.2 2.8 2.8 2.8h8.2c1.6 0 2.9-1.3 2.9-2.8V3.8h1c.2 0 .4-.2.4-.5s-.2-.6-.5-.6zM6.6 2.1c0-.6.5-1 1-1h3.8c.5 0 1 .4 1 1v.6H6.6v-.6zm8.8 14c0 1-.8 1.8-1.8 1.8H5.4c-1 0-1.8-.7-1.8-1.7V3.8h11.8v12.4z"></path><path fill="#8D9196" d="M9.5 16c.3 0 .5-.2.5-.5V6.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v9.3c0 .3.2.6.5.6zM6 15.5c.4 0 .6-.3.6-.6V6.8c0-.3-.2-.5-.5-.5s-.6.2-.6.5v8.1c0 .3.3.6.6.6zM13 15.5c.2 0 .5-.3.5-.6V6.8c0-.3-.3-.5-.6-.5s-.5.2-.5.5v8.1c0 .3.2.6.5.6z"></path></svg>
        </div>;
}
-->


<!-- ------------ Example 10: State: TodoList App Updated Version P4 ----------------------------------------- -->

<!-- UI Part -->
<!-- 
import './App.css';
import './Todo.css';
import {Task} from './Task';
import {useState} from "react"
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [activeTasks, setActiveTasks] = useState(0)
  const date = new Date();
  const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const dayName = daysOfWeek[date.getDay()];
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const todaysDate = `${dayName}, ${month} ${day}`;
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };

    if(newTask === "" || newTask === 0){
      alert('Please enter a task')
    }else{
      setTodoList([...todoList, task]);
      setActiveTasks(todoList.length + 1);
    }
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) =>  task.id !== id);
    setTodoList(newTodoList);
    setActiveTasks(todoList.length - 1);
  }

  

  return(
    <div className="App">
      <div className="container">
        
      
     <div className="addTask">
     <p class="date">{todaysDate}</p>
     <p class="number-of-tasks">{activeTasks} Active Tasks</p>
      <input onChange={handleChange} placeholder="Enter a task..."/>
      <button onClick={addTask}>Add Task</button>
      
     </div>
     <div className="list">
      {todoList.map((task)=>{
        return (<Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
        );
      })}
     </div>
     </div>
    </div>
  );
  }

  


export default App; -->

<!-- Components Part -->
<!-- import { useState } from "react";

// This is a Component
export const Task = (props) => {
  // let circleOutline = "white"
  const [circleOutline, setCircleOutLine] = useState("white");
  const [flag, setFlag] = useState(false)
  
  
  const circleColor = ()=>{
    circleOutline === "white" ? setCircleOutLine("green") : setCircleOutLine("white");
    setFlag(!flag)
  }
  
    return<div style={{backgroundColor: circleOutline === "white" ? "#393F49" : circleOutline}} className="task">
          <p className="task-name" >{props.taskName}</p>
          <svg  onClick={circleColor} className="check-mark" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><title>Complete Task</title><path fill={!flag ? circleOutline : "#393F49"} d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM218,360.38,137.4,270.81l23.79-21.41,56,62.22L350,153.46,374.54,174Z"/></svg>
          <svg onClick={() => props.deleteTask(props.id)} className="trash-can" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" ><title>Delete Task</title><path fill="#8D9196" d="M17.4 2.7h-4v-.6c0-1.2-.9-2.1-2-2.1H7.6a2 2 0 0 0-2 2v.7h-4c-.3 0-.5.3-.5.6s.2.5.5.5h1v12.4c0 1.5 1.2 2.8 2.8 2.8h8.2c1.6 0 2.9-1.3 2.9-2.8V3.8h1c.2 0 .4-.2.4-.5s-.2-.6-.5-.6zM6.6 2.1c0-.6.5-1 1-1h3.8c.5 0 1 .4 1 1v.6H6.6v-.6zm8.8 14c0 1-.8 1.8-1.8 1.8H5.4c-1 0-1.8-.7-1.8-1.7V3.8h11.8v12.4z"></path><path fill="#8D9196" d="M9.5 16c.3 0 .5-.2.5-.5V6.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v9.3c0 .3.2.6.5.6zM6 15.5c.4 0 .6-.3.6-.6V6.8c0-.3-.2-.5-.5-.5s-.6.2-.6.5v8.1c0 .3.3.6.6.6zM13 15.5c.2 0 .5-.3.5-.6V6.8c0-.3-.3-.5-.6-.5s-.5.2-.5.5v8.1c0 .3.2.6.5.6z"></path></svg>
        </div>;
} -->

<!-- Styling Part -->
<!-- .App {
    text-align: center;
    font-size: 1.9rem;
    /* background-color: darksalmon; */
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  .container {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 850px;
    height: 550px;
    transform: translate(-50%, -50%);
    background-color: #393F49;
    border-radius: 5px;
    padding: 4rem;
    box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 30%);
  }
  
  /* button{
    background-color: #61dbfb;
     */
  /* } */
  
  .addTask  input {
    margin-right: 1rem;
    
    padding: 0.4rem 0 0.4rem 0.4rem;
    background-color: white;
    border: none;
    border-radius: 3px;
    font-size: 1.4rem;
    width: 350px;
  }

  .addTask  input::placeholder{color:#8D9196}
 
  .addTask  button{
    padding:0.4rem 0.4rem;
    color:white;
    background-color:#61DBFB;
    border:none;
    border-radius:3px;
    font-size:1.4rem;
    cursor:pointer
}
.list{
  margin-top: 50px;
  position: absolute;
}

.list {
  height: calc(850px - 435px);
  overflow-y: scroll;
}

.task{
  width: 650px;
  height: 50px;
  display: flex;
  margin: 15px;
  justify-content: space-between; 
  align-items: center;
  
}

.task .trash-can:hover path{
  fill:#FF5450
}

.check-mark {
  
  position: absolute;
  right: 50px;
}

.trash-can{
  margin-top: 0;
}

  button, input {
    overflow: visible;
  }
  
  button, input {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  p{
    color: white;
  }

  .date {
    position: absolute;
    top: -7px;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    font-family: sans-serif;
}

.number-of-tasks {
  color: #61DBFB;
  font-size: 1rem;
  position: absolute;
  top: 28px;
  font-family: monospace;

}

p {
  color: white;
  
}

.task-name {
  color: white;
  
} -->

<!-- ------------ Example 11: State: Mounting/Updating/Unmounting ----------------------------------------- -->


<!-- import './App.css';
import {useState} from "react"
import {Text} from "./Text"
function App() {
  const [showText, setShowText] = useState(false)
  return(
    <div className="App">
      <button onClick={()=>{
        setShowText(!showText)
      }} >Show Text</button>
      {showText && <Text />}
    </div>
  );
  }

  


export default App; -->

<!-- Text Component is here  -->

<!-- import React from "react"
import { useState } from "react"
export const Text = () => {
    const [text, showText] = useState("");

    return(
        <div>
            <input onChange={(event)=>{
                showText(event.target.value)
            }} />
            <h1>{text}</h1>
        </div>
    );
} -->

<!-- Another example of Text Component is here  -->

<!-- import React from "react"
import { useState, useEffect } from "react"
export const Text = () => {
    const [text, showText] = useState("");

    useEffect(()=>{
        console.log('COMPONENT MOUNTED')
        return () => {
            console.log('COMPONENT UNMOUNTED')
        };
    }, []);

    return(
        <div>
            <input onChange={(event)=>{
                showText(event.target.value)
            }} />
            <h1>{text}</h1>
        </div>
    );
} -->

<!-- ------------ Example 12: useEffect: fetching data from an Api using Axios ----------------------------------------- -->

<!-- import './App.css';
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

  


export default App; -->

<!-- ------------ Example 12: passing name to an Api and returnig the age of the person Part1 ----------------------------------------- -->

<!-- 
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

  


export default App; -->

<!-- ------------ Example 12: passing name to an Api and returnig the age of the person Part2 ----------------------------------------- -->


<!-- import './App.css';
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

  


export default App; -->

<!-- ------------ Example 13:  Excuse Generator Exercise ----------------------------------------- -->


<!-- import './App.css';
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

export default App; -->

<!-- ------------ Example 15:  React Router Dom Lesson ----------------------------------------- -->


<!-- import './App.css';
import Axios from 'axios';
import {useEffect, useState} from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { NavBar } from './Navbar';
function App() {
 

  return(
    <div className="App">
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
     </Router>
    </div>
  );
  }

export default App; -->

<!-- This NavBar Component -->
<!-- import {Link} from 'react-router-dom'
export const NavBar = () => {
    return(
        <div>
        <Link to="/" >Home</Link>
        <Link to="/menu" >Menu</Link>
        
      </div>
    );
} -->

<!-- ------------ Example 16:  Prop drilling Example ----------------------------------------- -->

<!-- import './App.css';
import Axios from 'axios';
import {useEffect, useState} from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { NavBar } from './Navbar';
import { Profile } from './pages/Profile';
function App() {
  const [username, setUsername] = useState("Shaalle");
  return(
    <div className="App">
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home username={username} />} />
        <Route path='/profile' element={<Profile username={username} setUsername={setUsername} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
     </Router>
    </div>
  );
  }


export default App; -->

<!--  Menu Page -->
  <!-- import { useState } from "react"

export const Menu = () => {
    const [count, setCount] = useState(0);
    let counter = 0;
    const counterApp = () => setCount(count + 1)
    return <div className="App">
        <h1>This Is The Menu Page</h1>
        <button onClick={counterApp}>Counter</button>
        <h2>{count}</h2>
    </div>

}
 -->

 <!-- Home page -->
 <!-- export const Home = (props) => {
    return <h1>This Is The Home Page and user is: {props.username}</h1>
} -->

<!-- Profile Page -->
<!-- import { ChangeProfile } from "../components/ChangeProfile";
export const Profile = (props) => {
  return (
    <div className="App">
      {""}
      <div>PROFILE, user is: {props.username}</div>
      <ChangeProfile setUsername={props.setUsername} />
    </div>
  );
}; -->

 <!-- Navbar page -->

 <!-- import {Link} from 'react-router-dom'
export const NavBar = () => {
    return(
        <div>
        <Link to="/" >Home</Link>
        <Link to="/profile" >Profile</Link>
        <Link to="/menu" >Menu</Link>
        
      </div>
    );
} -->

<!-- Change Profile Component -->
<!-- import { useState } from "react";

export const ChangeProfile = (props) => {
  const [newUsername, setNewUsername] = useState("");
  return (
  <div className="App">
    <input onChange={(event)=> setNewUsername(event.target.value)}/>
    <button onClick={()=> props.setUsername(newUsername)}>Change Username</button>
  </div>
  );
}; -->

<!-- ------------ Example 17:  React useContext API Example ----------------------------------------- -->
<!-- import "./App.css";
import Axios from "axios";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { NavBar } from "./Navbar";
import { Profile } from "./pages/Profile";

export const AppContext = createContext();
function App() {
  const [username, setUsername] = useState("Shaalle");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App; -->

<!-- Home Page -->

<!-- import { useContext } from "react"
import { AppContext } from "../App"
export const Home = () => {
    const {username} = useContext(AppContext)
    return <h1>This Is The Home Page and user is: {username}</h1>
} -->

<!-- Profile Page -->

<!-- import { ChangeProfile } from "../components/ChangeProfile";
import {useContext} from 'react';
import {AppContext} from '../App';
export const Profile = () => {
  const {username} = useContext(AppContext);
  return (
    <div className="App">
      {""}
      <div>PROFILE, user is: {username}</div>
      <ChangeProfile />
    </div>
  );
}; -->

<!-- Change Profile Component -->

<!-- import { useState, useContext } from "react";
import {AppContext} from '../App';
export const ChangeProfile = () => {
  const {setUsername}  = useContext(AppContext);

  const [newUsername, setNewUsername] = useState("");
  return (
  <div className="App">
    <input onChange={(event)=> setNewUsername(event.target.value)}/>
    <button onClick={()=> setUsername(newUsername)}>Change Username</button>
  </div>
  );
}; -->

<!-- ------------ Example 18:  Fetching Data in React Query ----------------------------------------- -->

<!-- import "./App.css";
import Axios from "axios";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { NavBar } from "./Navbar";
import { Profile } from "./pages/Profile";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
export const AppContext = createContext();
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true
      }
    }
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
        </QueryClientProvider>
    </div>
  );
}

export default App; -->

<!-- Home Page -->

<!-- import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';
export const Home = () => {
    const { data, isLoading, refetch } = useQuery(["cat"], () => {return Axios.get('https://catfact.ninja/fact/').then((res) => res.data);
    });

    return isLoading ? <h1 style={{color:"teal"}}>Loading..</h1> : <h1>This Is The Home Page  <p>{data?.fact}</p> <button onClick={refetch}>Update Data</button></h1>
} -->

<!-- ------------ Example 19:  Forms in React ----------------------------------------- -->
<!-- import "./App.css";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App; -->

<!-- Form Component -->

<!-- import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
export const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("Your Full Name is Required!"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null],'Passwords must match').required()
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")}/>
            <p className='error-class'>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p className='error-class'>{errors.email?.message}</p>
            <input type="number" placeholder="Age..." {...register("age")}/>
            <p className='error-class'>{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <p className='error-class'>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
            <p className='error-class'>{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    );
} -->

<!-- ------------ Example 20:  Custom Hooks in React Part 1 ----------------------------------------- -->
<!-- import "./App.css";
import { useToggle } from "./useToggle";


function App() {
  const [isVisible, toggle] = useToggle();
  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <h1>Hidden text</h1>}
    </div>
  );
}

export default App; -->

<!-- useToggle Hook  -->
<!-- import {useState} from 'react';

export const useToggle = (initialVal = false) => {
    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState(!state);
    }

    return [state, toggle];
} -->

<!-- ------------ Example 20:  Fetching Data From an Api  using Custom Hooks & React Query Part 2 ----------------------------------------- -->

<!-- import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cat } from "./components/Cat";
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat />
      </QueryClientProvider>
    </div>
  );
}

export default App; -->

<!-- Cat Component -->

<!-- import { useGetCat } from "../useGetCat"

export const Cat = () =>{
    const {data, isCatLoading, refetchData} = useGetCat();
    if(isCatLoading) return <h1>Loading...</h1>
    return <div>
        <h1>{data?.fact}</h1>
        <button onClick={refetchData}>refetch</button>
    </div>
} -->

<!-- useGetCat Hook -->

<!-- import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const useGetCat = () => {
    const {data, refetch, isLoading: isCatLoading} = useQuery(["cat"], () => {
        return Axios.get('https://catfact.ninja/fact').then((res) => res.data )
    });

    const refetchData = () => {
        alert('DATA REFETCHED')
        refetch();
    }
    return {data, refetchData, isCatLoading};
} -->