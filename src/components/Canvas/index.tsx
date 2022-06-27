import React, { useMemo, useState } from 'react'
import Arc from '../Arc'
import Legend from '../legend';
import { CANVASTYPE } from '../type'

function Canvas({ width, height, dataSource, radius, title }: CANVASTYPE) {
  const mx = radius * 2 + 50;
  const my = height / 2;

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const total = useMemo(() => {
    let sum = 0
    dataSource.forEach((item) => {
      item.preTotal = sum
      sum += item.value
    })
    return sum
  }, [dataSource])

  return (
    <svg width={width} height={height}>
      {/* <!-- 画圆弧 (rx ry x-axis-rotation large-arc-flag sweep-flag x y) --> */}
      {dataSource.map((item, index) => {
        const isActive = index === activeIndex
        return (
          <Arc isActive={isActive} key={index} r={radius} deg={item.value / total * 360} width={10 * (index + 1)} color={item.color} transform={`rotate(${item.preTotal as number / total * 360})`} mx={mx} my={my} />
        )
      })}
      <text x={mx - radius} y={my} textAnchor="middle" dominantBaseline={'middle'} fontSize={"1.3rem"} fontWeight={"bold"}>{title}</text>
      <Legend x={mx + 50} height={height} width={width - mx - 50} dataSource={dataSource} total={total} setActiveIndex={setActiveIndex} />
    </svg>
  )
}

export default Canvas