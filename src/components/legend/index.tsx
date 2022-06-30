import React, { Fragment, useContext, useState } from 'react'
import { DataContext } from '../context';
import { DATASOURCE, LEGENDTYPE } from '../type'

function LegendItem(
  { setActiveIndex, item, total, index, ...props }
    : React.SVGAttributes<SVGForeignObjectElement>
    & { total: number; setActiveIndex: React.Dispatch<React.SetStateAction<number>>; item: DATASOURCE; index: number }) {
  const [deleteFlag, setDeleteFlag] = useState<boolean>(false)
  const { setData } = useContext(DataContext)!
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontSize: '10px' }} key={index}>
      <div
        style={{ background: deleteFlag ? '#cecece' : item.color, width: '18px', height: '18px', marginRight: '5px', cursor: 'pointer' }}
        onMouseOver={() => {
          setActiveIndex(index)
        }}
        onMouseLeave={() => {
          setActiveIndex(-1)
        }}
        onClick={() => {
          setDeleteFlag(!deleteFlag)
          if (!deleteFlag) {
            setData(dataSources => dataSources.filter(dataSource => dataSource.name !== item.name))
          } else {
            setData(data => {
              data.splice(index, 0, item)
              return data
            })
          }
        }}
      />
      <div>{item.name}&nbsp;{deleteFlag ? 0 : (item.value / total * 100).toFixed(0)}%</div>
    </div>
  )
}

function Legend({ setActiveIndex, dataSource, total, ...props }: React.SVGAttributes<SVGForeignObjectElement> & LEGENDTYPE) {

  return (
    <foreignObject {...props}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%', userSelect: 'none' }}>
        {dataSource.map((item, index) => {
          console.log(item, total)
          return (
            <Fragment key={index}>
              <LegendItem item={item} index={index} {...props} setActiveIndex={setActiveIndex} total={total} />
            </Fragment>
          )
        })}
      </div>
    </foreignObject>
  )
}

export default Legend