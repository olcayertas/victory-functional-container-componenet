import React from 'react';
import {VictoryArea, VictoryBar, VictoryChart} from 'victory';

import {chartContainerStyle} from './styles';
import ChartContainer from './createChartContainer';
import createGradientFill from './createGradientFill';
import {DataSet, getAreaStyle} from './constants';
import useChartState from './useChartState';

type Props = {
  width: number;
  dataSet: DataSet;
};

const areaAnimation = {
  duration: 1000,
  onLoad: {duration: 1000},
};

const barAnimation = {
  duration: 2000,
  onLoad: {duration: 1000},
};

const padding = {
  top: 50,
  bottom: 0,
  left: 0,
  right: 35,
};

const AreaChartWithVolume = (props: Props) => {
  const {dataSet, width} = props;
  const {data} = dataSet;
  const {fillColor, strokeColor} = useChartState(data);
  const style = getAreaStyle(strokeColor, 'chart1');
  return (
    <div style={chartContainerStyle}>
      <VictoryChart
        width={width}
        padding={padding}
        minDomain={{y: 70}}
        maxDomain={{y: dataSet.maxDomain}}
        //This doesn't work
        //containerComponent={<ChartContainer/>}
        //This works
        containerComponent={ChartContainer({})}
      >
        {createGradientFill(fillColor, 'chart1')}
        {/*<ChartAxis/>*/}
        <VictoryArea
          animate={areaAnimation}
          style={style}
          data={data}
          x={'date'}
          y={'close'}
          //labels={({datum}) => `${datum.date}, ${datum.close.toFixed(2)}`}
        />
        <VictoryBar
          animate={barAnimation}
          data={data}
          x={'date'}
          y={(d) => (Math.log2(d.volume) - dataSet.minDomain) * 3 + 55}
          //labels={({ datum }) => `${datum.date}, ${(Math.log2(datum.volume) - dataSet.minDomain) * 3 + 55}`}
        />
      </VictoryChart>
    </div>
  );
};

export {AreaChartWithVolume};
