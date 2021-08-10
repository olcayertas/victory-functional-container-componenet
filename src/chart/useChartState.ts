import {ChartData} from "./helpers";

export default function useChartState(data: ChartData[]) {
  const firstPrice = data[0].close;
  const lastPrice = data[data.length - 1].close
  const isIncreasing = firstPrice < lastPrice
  const fillColor = isIncreasing ? '#4AD29559' : '#EF5B5B'
  const strokeColor = isIncreasing ? '#4AD295' : '#EF5B5B'

  return {
    fillColor,
    strokeColor,
  }
}
