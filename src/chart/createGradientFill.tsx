import React from "react";

const createGradientFill = (color: string, id: string) => (
  <defs>
    <linearGradient id={id} x1="100%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor={color}/>
      <stop offset="100%" stopColor="#FFFFFFFF"/>
    </linearGradient>
  </defs>
)

export default createGradientFill;
