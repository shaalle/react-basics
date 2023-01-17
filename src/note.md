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


