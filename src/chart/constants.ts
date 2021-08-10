import aaplSample1 from './data/aapl/sample1.json';
import {ChartData, getDomainWithExtractor} from './helpers';

export type DataSet = {
  data: ChartData[];
  minDomain: number;
  maxDomain: number;
};

const domain = getDomainWithExtractor(aaplSample1, (data) => data.close);
const volumeDomain = getDomainWithExtractor(aaplSample1, (data) => Math.log2(data.volume));
const _minDomain = domain[0] < volumeDomain[0] ? domain[0] : volumeDomain[0];
const minDomain = _minDomain < 0 || _minDomain - 5 < 0 ? 0 : _minDomain - 5;
const maxDomain = domain[1] < volumeDomain[1] ? volumeDomain[1] + 5 : domain[1] + 5;

let dataSet1: DataSet = {
  data: aaplSample1,
  minDomain: Math.floor(minDomain),
  maxDomain: Math.ceil(maxDomain),
};

console.log(dataSet1.minDomain, dataSet1.maxDomain);

console.log(minDomain, maxDomain);

const xAxisStyle = {
  axis: {stroke: 'none'},
  grid: {stroke: 'none'},
  ticks: {stroke: 'none'},
  tickLabels: {
    fontSize: 12,
    fill: '#A0A3B9',
  },
};

const getAreaStyle = (strokeColor: string, fillId: string) => {
  return {
    data: {
      fill: `url(#${fillId})`,
      stroke: `${strokeColor}`,
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
  };
};

const chartProps = {dataSet: dataSet1, width: 900};

export {chartProps, getAreaStyle, dataSet1, xAxisStyle};
