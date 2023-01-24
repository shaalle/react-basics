
import './App.css';
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

  


export default App;
