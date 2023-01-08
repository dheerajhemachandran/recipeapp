import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Result from './components/Result';
import Search from './components/Search';

function App() {
  const [query, setquery] = useState([])
  return (
    <div className="text-white flex h-screen bg-slate-800 flex-col">
      <Navbar/>
      <Search query={query} setquery={setquery}/>
      <Result query={query}/>
    </div>
  );
}

export default App;
