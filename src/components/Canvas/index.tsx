import React, { useMemo, useState } from 'react'
import Arc from '../Arc'
import { CurrentArcContext, PopoverShowContext } from '../context';
import Legend from '../legend';
import Popover from '../Popover';
import { CANVASTYPE, DATASOURCE } from '../type'

function Canvas({ width, height, dataSource, radius, title }: CANVASTYPE) {
  const mx = radius * 2 + 50;
  const my = height / 2;

  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [visible, setVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
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


  return (
    <PopoverShowContext.Provider value={{ visible, setVisible }}>
      <CurrentArcContext.Provider value={{ arc, setArc }}>
        <svg width={width} height={height} style={{ position: 'relative' }} onMouseMove={(event) => {
          setPosition({
            x: event.clientX,
            y: event.clientY
          })
        }}>
          {/* <!-- 画圆弧 (rx ry x-axis-rotation large-arc-flag sweep-flag x y) --> */}
          {dataSource.map((item, index) => {
            const isActive = index === activeIndex
            return (
              <Arc isActive={isActive} key={index} r={radius} deg={item.value / total * 360} width={10 * (index + 1)} {...item} transform={`rotate(${item.preTotal as number / total * 360})`} mx={mx} my={my} />
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