import { useState } from 'react';
import logo from './assets/stackline_logo (1).svg';
import './App.css';
import StacklineTable from './components/StacklineTable';
import StacklineGraph from './components/StacklineGraph';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <header className="header">
        <img src={logo} className="logo" alt="Stackline Logo" />
      </header>

      <div className="main-content">
        <div className="left-sidebar">
          <ProductDetails /> {}
        </div>
        <div className="right-content">
          <div className="graph-container">
            <StacklineGraph />
          </div>
          <div className="table-container">
            <StacklineTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;