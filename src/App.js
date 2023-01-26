import "./App.css";
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

export default App;
