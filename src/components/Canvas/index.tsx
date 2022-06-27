import React from 'react'
import Arc from '../Arc'

function Canvas() {

  return (
    <svg width="600" height="600">
      {/* <!-- 画圆弧 (rx ry x-axis-rotation large-arc-flag sweep-flag x y) --> */}
      <Arc r={100} deg={90} width={10} color={'#1890ff'} transform="rotate(60)" mx={277} my={-205} />
      <Arc r={100} deg={60} width={20} color={'#18ff5d'} mx={180} my={100} />
      <Arc r={100} deg={210} width={30} color={'#e29b37'} transform="rotate(150)" mx={-20} my={-221} />
    </svg>
  )
}

export default Canvas