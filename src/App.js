import React from 'react';

import Sidebar from './components/sidebar'
import About from "./components/about";

import './App.css';

function App() {
  return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
            <div id="colorlib-main">
                <About></About>
            </div>
        </div>
      </div>
  );
}

export default App;
