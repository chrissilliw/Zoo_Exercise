import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
