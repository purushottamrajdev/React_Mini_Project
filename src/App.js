import React from 'react';
import './App.css';
import Home from '../src/container/Home/Home';
import {Route,BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home />
    </div>
    </BrowserRouter>
  );
}

export default App;
