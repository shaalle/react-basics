import "./App.css";
import { Person } from "./components/Person";

function App() {
  
  return (
    <div className="App">
    <Person
      name='Sucdi'
      email='Sucdi@gmail.com'
      age='19'
      ismarried= {false}
      friends= {["Salmo", "Nasro", "Jamaal"]} />
    
    </div>
  );
}

export default App;
