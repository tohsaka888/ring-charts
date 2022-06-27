import React from 'react'
import Arc from '../Arc'

function Canvas() {
  const mx = 250
  const my = 150
  return (
    <svg width="350" height="350">
      {/* <!-- 画圆弧 (rx ry x-axis-rotation large-arc-flag sweep-flag x y) --> */}
      <Arc r={100} deg={90} width={10} color={'#1890ff'} transform="rotate(60)" mx={mx} my={my} />
      <Arc r={100} deg={60} width={20} color={'#18ff5d'} mx={mx} my={my} />
      <Arc r={100} deg={210} width={30} color={'#e29b37'} transform="rotate(150)" mx={mx} my={my} />
    </svg>
  )
}

export default Canvas