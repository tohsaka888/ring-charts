import React from 'react'
import { ARCTYPE } from '../type';

function Arc({ r, deg, width, color, transform, mx = 0, my = 0 }: ARCTYPE) {
  const x = r * Math.cos(deg * Math.PI / 180) - r
  const y = r * Math.sin(deg * Math.PI / 180);
  return (
    <path d={`M ${mx} ${my} a ${r} ${r} 0 ${deg > 180 ? 1 : 0} 0 ${x} ${y}`} fill="none" stroke={color} strokeWidth={width} transform={transform} />
  )
}

export default Arc