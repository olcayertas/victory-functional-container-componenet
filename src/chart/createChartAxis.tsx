import React from 'react';
import {VictoryAxis} from 'victory';
import {xAxisStyle} from './constants';

function ChartAxis() {
  return (
    <VictoryAxis
      orientation={'right'}
      dependentAxis
      style={xAxisStyle}
      tickFormat={(value) => `${value}`} tickCount={5}
    />
  );
}

export default ChartAxis;
