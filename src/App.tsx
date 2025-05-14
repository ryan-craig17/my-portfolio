import React from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import { BrowserRouter } from "react-router-dom";
// import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
    </BrowserRouter>

  );
}

export default App;
