
import './App.css';

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

export default App;
