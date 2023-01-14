
import './App.css';

function App() {

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
export default App;
