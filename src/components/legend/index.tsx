import React from 'react'
import { LEGENDTYPE } from '../type'

function Legend({ setActiveIndex, dataSource, total, ...props }: React.SVGAttributes<SVGForeignObjectElement> & LEGENDTYPE) {
  return (
    <foreignObject {...props}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%', userSelect: 'none' }}>
        {dataSource.map((item, index) => {
          return (
            <div style={{ display: 'flex', alignItems: 'center', }} key={index}>
              <div style={{ background: item.color, width: '18px', height: '18px', marginRight: '5px', cursor: 'pointer' }} onMouseOver={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(-1)} />
              <div>{item.name}&nbsp;{(item.value / total * 100).toFixed(0)}%</div>
            </div>
          )
        })}
      </div>
    </foreignObject>
  )
}

export default Legend