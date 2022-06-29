import React, { useContext } from 'react'
import { CurrentArcContext, PopoverShowContext } from '../context'
import { PopoverProps } from '../type'

function Popover({ total, position }: PopoverProps) {
  const { visible } = useContext(PopoverShowContext)!
  const { arc } = useContext(CurrentArcContext)!
  console.log(total, arc.value)
  return (
    <div
      style={{
        width: 'max-content',
        height: '40px',
        display: visible ? 'flex' : 'none',
        boxShadow: `0px 0px 5px 2px ${arc.color}`,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 8px',
        borderRadius: '5px',
        position: 'absolute',
        top: position.y + 20,
        left: position.x + 20,
        background: '#fff'
      }}
    >
      <div style={{ width: '10px', height: '10px', background: arc.color, borderRadius: '50%', marginRight: '8px' }} />
      <div style={{ marginRight: '6px' }}>{arc.name}</div>
      <div>{(arc.value / total * 100).toFixed(0) + '%'}</div>
    </div>
  )
}

export default Popover