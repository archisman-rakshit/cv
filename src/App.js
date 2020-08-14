import React from 'react';

import Sidebar from './components/sidebar'
import About from "./components/about";
import Introduction from "./components/introduction";
import Work from "./components/work_exp";

import './App.css';

function App() {
  return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
            <div id="colorlib-main">
                <Introduction />
                <About />
                <Work />
            </div>
        </div>
      </div>
  );
}

export default App;
