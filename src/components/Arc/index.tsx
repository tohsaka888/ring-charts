import React, { useContext, useState } from "react";
import { CurrentArcContext, PopoverShowContext } from "../context";
import { ARCTYPE } from "../type";
import { a, useSpring, config } from 'react-spring'

function Arc({ r, deg, width, color, transform, mx = 0, my = 0, isActive, name, value, id }: ARCTYPE) {
  const x = r * Math.cos((deg * Math.PI) / 180) - r;
  const y = r * Math.sin((deg * Math.PI) / 180);
  const [scaleSize, setScaleSize] = useState<number>(0);
  const { setVisible } = useContext(PopoverShowContext)!
  const { setArc } = useContext(CurrentArcContext)!

  const widthStyle = useSpring({
    strokeWidth: isActive ? width + 3 : width + scaleSize,
    config: config.gentle
  })

  return (
    <a.path
      style={{ transformOrigin: `${mx - r}px ${my}px` }}
      onMouseOver={(event) => {
        event.stopPropagation()
        setScaleSize(3);
        setVisible(true);
        setArc({ color, name, value, id })
      }}
      onMouseOut={() => {
        setScaleSize(0);
        setVisible(false);
      }}
      d={`M ${mx} ${my} a ${r} ${r} 0 ${deg > 180 ? 1 : 0} 1 ${x} ${y}`}
      fill="none"
      stroke={color}
      {...widthStyle}
      transform={transform}
    />
  );
}

export default Arc;
