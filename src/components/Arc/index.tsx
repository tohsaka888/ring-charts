import React, { useContext, useState } from "react";
import { CurrentArcContext, PopoverShowContext } from "../context";
import { ARCTYPE } from "../type";

function Arc({ r, deg, width, color, transform, mx = 0, my = 0, isActive, name, value }: ARCTYPE) {
  const x = r * Math.cos((deg * Math.PI) / 180) - r;
  const y = r * Math.sin((deg * Math.PI) / 180);
  const [scaleSize, setScaleSize] = useState<number>(0);
  const { setVisible } = useContext(PopoverShowContext)!
  const { setArc } = useContext(CurrentArcContext)!
  return (
    <g>
      <path
        style={{ transformOrigin: `${mx - r}px ${my}px` }}
        onMouseOver={() => {
          setScaleSize(5);
          setVisible(true);
          setArc({ color, name, value })
        }}
        onMouseOut={() => {
          setScaleSize(0);
          setVisible(false);
        }}
        d={`M ${mx} ${my} a ${r} ${r} 0 ${deg > 180 ? 1 : 0} 1 ${x} ${y}`}
        fill="none"
        stroke={color}
        strokeWidth={isActive ? width + 5 : width + scaleSize}
        transform={transform}
      />
    </g>
  );
}

export default Arc;
