import React, { useState } from "react";
import { ARCTYPE } from "../type";

function Arc({ r, deg, width, color, transform, mx = 0, my = 0 }: ARCTYPE) {
  const x = r * Math.cos((deg * Math.PI) / 180) - r;
  const y = r * Math.sin((deg * Math.PI) / 180);
  const [scaleSize, setScaleSize] = useState<number>(1);
  return (
    <g>
      <path
        className="arc"
        onMouseOver={() => {
          setScaleSize(1.2);
        }}
        onMouseOut={() => {
          setScaleSize(1);
        }}
        d={`M ${300} ${300} a ${r} ${r} 0 ${deg > 180 ? 1 : 0} 1 ${x} ${y}`}
        fill="none"
        stroke={color}
        strokeWidth={width * scaleSize}
        transform={transform}
      />
    </g>
  );
}

export default Arc;
