export type ChartData = {
  close: number,
  date: string,
  high: number,
  low: number,
  open: number,
  volume: number,
}

const getDomainWithExtractor = (data: ChartData[], extract: (data: ChartData) => number) => {
  if (data.length === 0) return [0, 0];
  let domainMin = extract(data[0]);
  let domainMax = domainMin;
  data.forEach(item => {
    const value = extract(item);
    if (value < domainMin) domainMin = value;
    if (value > domainMax) domainMax = value;
  })
  return [domainMin, domainMax]
};

export {
  getDomainWithExtractor,
}
