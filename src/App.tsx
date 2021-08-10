import React from 'react';
import './App.css';
import {chartProps} from "./chart/constants";
import {AreaChartWithVolume} from "./chart/chart";

function App() {
  return (
    <div className="App">
      <AreaChartWithVolume {...chartProps} />
    </div>
  );
}

export default App;
