import {CSSProperties} from "react";

const getChangeStyle = (isIncreasing: boolean): CSSProperties => ({
  color: `${isIncreasing ? '#4AD295' : '#EF5B5B'}`,
  padding: 0,
  margin: 0,
  marginLeft: '12px',
  marginBottom: '4px',
  fontSize: '16px',
});

const chartContainerStyle: CSSProperties = {};

export {
  chartContainerStyle,
  getChangeStyle,
};
