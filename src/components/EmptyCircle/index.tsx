import React, { useContext, useState } from 'react'
import { EmptyCircleProps } from '../type'
import { a, useSpring } from 'react-spring'
import { CurrentArcContext, PopoverShowContext } from '../context'


function EmptyCircle({ color, radius, my, activeIndex, item, setActiveIndex }: EmptyCircleProps) {

  const [isActive, setIsActive] = useState<boolean>(false)

  const strokeWidthStyle = useSpring({
    strokeWidth: activeIndex === item?.id ? 20 : isActive ? 20 : 15,
  })
  const { setArc } = useContext(CurrentArcContext)!

  const { setVisible } = useContext(PopoverShowContext)!

  return (
    <a.path
      d={`M ${radius / 2} ${my} a ${radius} ${radius} 0 1 0 ${radius * 2
        } 0 a ${radius} ${radius} 0 1 0 -${radius * 2} 0`}
      fill="none"
      stroke={color}
      {...strokeWidthStyle}
      onMouseOver={() => {
        if (item !== undefined) {
          setIsActive(true)
          setVisible(true)
          setActiveIndex(item.id)
          setArc(item)
        }
      }}
      onMouseOut={() => {
        if (item !== undefined) {
          setIsActive(false)
          setVisible(false)
        }
      }}
    />
  )
}

export default EmptyCircle