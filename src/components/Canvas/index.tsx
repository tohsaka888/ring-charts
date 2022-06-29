import React, { useMemo, useState } from 'react'
import Arc from '../Arc'
import { CurrentArcContext, PopoverShowContext } from '../context';
import Legend from '../legend';
import Popover from '../Popover';
import { CANVASTYPE, DATASOURCE } from '../type'
import { useSprings, config, useSpring } from 'react-spring'

function Canvas({ width, height, dataSource, radius, title }: CANVASTYPE) {
  const mx = radius * 2 + 50;
  const my = height / 2;

  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [visible, setVisible] = useState<boolean>(false);
  const [arc, setArc] = useState<DATASOURCE>({
    name: '',
    value: 0,
    color: ''
  })

  const total = useMemo(() => {
    let sum = 0
    dataSource.forEach((item) => {
      item.preTotal = sum
      sum += item.value
    })
    return sum
  }, [dataSource])

  const springs = useSprings(
    dataSource.length,
    dataSource.map(item => ({
      from: {
        transform: `rotate(0)`
      },
      to: {
        transform: `rotate(${item.preTotal as number / total * 360})`
      },
      immediate: true
    }))
  )

  const [position, setPosition] = useSpring(() => ({
    top: 0,
    left: 0,
    config: config.stiff
  }))

  return (
    <PopoverShowContext.Provider value={{ visible, setVisible }}>
      <CurrentArcContext.Provider value={{ arc, setArc }}>
        <svg width={width} height={height} style={{ position: 'relative' }}
          onMouseMove={(event) => {
            window.requestAnimationFrame(() => {
              setPosition.start({
                left: event.clientX + 50,
                top: event.clientY + 20
              })
            })
          }}>
          {/* <!-- 画圆弧 (rx ry x-axis-rotation large-arc-flag sweep-flag x y) --> */}
          {springs.map((item, index) => {
            const isActive = index === activeIndex
            const arc = dataSource[index]
            return (
              <Arc isActive={isActive} key={index} r={radius} deg={arc.value / total * 360} width={10 * (index + 1)} {...arc} transform={item.transform} mx={mx} my={my} />
            )
          })}
          <text x={mx - radius} y={my} textAnchor="middle" dominantBaseline={'middle'} fontSize={"1.3rem"} fontWeight={"bold"}>{title}</text>
          <Legend x={mx + 50} height={height} width={width - mx - 50} dataSource={dataSource} total={total} setActiveIndex={setActiveIndex} />
        </svg>
        <Popover total={total} position={position} />
      </CurrentArcContext.Provider>
    </PopoverShowContext.Provider>
  )
}

export default Canvas