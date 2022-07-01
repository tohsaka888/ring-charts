import React, { useMemo, useState } from 'react'
import Arc from '../Arc'
import { CurrentArcContext, PopoverShowContext, DataContext } from '../context';
import Legend from '../legend';
import Popover from '../Popover';
import { CANVASTYPE, DATASOURCE } from '../type'
import { useSprings, config, useSpring } from 'react-spring'
import EmptyCircle from '../EmptyCircle'

function Canvas({ width, height, dataSource, radius, title }: CANVASTYPE) {
  const mx = radius * 2 + 50;
  const my = height / 2;

  const [activeIndex, setActiveIndex] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<DATASOURCE[]>(dataSource);

  const [arc, setArc] = useState<DATASOURCE>({
    name: '',
    value: 0,
    color: '',
    id: ''
  })

  const total = useMemo(() => {
    console.log('run')
    let sum = 0
    data.forEach((item) => {
      item.preTotal = sum
      sum += item.value
    })
    return sum
  }, [data])

  const springs = useSprings(
    data.length,
    data.map(item => ({
      from: {
        transform: `rotate(0)`
      },
      to: {
        transform: `rotate(${item.preTotal as number / total * 360})`
      },
      config: config.slow,
    }))
  )

  const [position, setPosition] = useSpring(() => ({
    top: 0,
    left: 0,
    immediate: true
  }))

  return (
    <PopoverShowContext.Provider value={{ visible, setVisible }}>
      <CurrentArcContext.Provider value={{ arc, setArc }}>
        <DataContext.Provider value={{ data, setData }}>
          <svg width={width} height={height} style={{ position: 'relative' }}
            onMouseMove={(event) => {
              window.requestAnimationFrame(() => {
                setPosition.start({
                  left: event.clientX + 50,
                  top: event.clientY + 20
                })
              })
            }}>
            {(data.length === 0 || total === 0) &&
              <EmptyCircle color={'#cecece'} radius={radius} my={my} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />}
            {/* <!-- 画圆弧 (rx ry x-axis-rotation large-arc-flag sweep-flag x y) --> */}
            {springs.map((item, index) => {
              const arc = data[index]
              const isActive = arc.id === activeIndex
              return (
                <React.Fragment key={index}>
                  {data.length === 1 ?
                    <EmptyCircle key={index} color={arc.color} radius={radius} my={my} item={arc} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                    :
                    <Arc
                      isActive={isActive}
                      key={index}
                      r={radius}
                      deg={arc.value / total * 360}
                      width={10 * (index + 1)}
                      {...arc}
                      transform={item.transform}
                      mx={mx}
                      my={my}
                    />}
                </React.Fragment>
              )
            })}
            <text x={mx - radius} y={my} textAnchor="middle" dominantBaseline={'middle'} fontSize={"1.3rem"} fontWeight={"bold"}>{title}</text>
            <Legend x={mx + 50} height={height} width={width - mx - 50} dataSource={dataSource} total={total} setActiveIndex={setActiveIndex} />
          </svg>
          <Popover total={total} position={position} />
        </DataContext.Provider>
      </CurrentArcContext.Provider>
    </PopoverShowContext.Provider>
  )
}

export default Canvas