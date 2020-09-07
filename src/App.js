import React from 'react';

// import styles
import './assets/styles/styles.css';

// import components
import Header from './components/Header';
import InsuranceList from './components/InsuranceList';
import { insuranceData } from './assets/data'

function App() {
  return (
    <div className="App">
      <Header insuranceData={insuranceData}/>
      <InsuranceList insuranceData={insuranceData}/>
    </div>
  );
}

export default App;
