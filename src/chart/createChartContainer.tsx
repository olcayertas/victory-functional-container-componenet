import React from 'react';
import {createContainer} from 'victory';

const CombinedContainer = createContainer('selection', 'voronoi');

const selectionStyle = {
  fill: 'transparent',
  fillOpacity: 0.5,
  stroke: 'red',
  strokeWidth: 1,
};

type Props = {};

const ChartContainer = (props: Props) => (
  <CombinedContainer
    // @ts-ignore
    cursorDimension="x"
    selectionDimension="x"
    selectionStyle={selectionStyle}
    // @ts-ignore
    labels={({datum}) => `Date: ${datum.date}\nPrice: $${datum.close.toFixed(2)}\nVolume: ${datum.volume}`}
  />
);

export default ChartContainer;
