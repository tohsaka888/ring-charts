import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="App">
      <Canvas />
      {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="400" height="300" style="position:absolute;left:0;top:0;user-select:none"><rect width="400" height="300" x="0" y="0" id="0" fill="none" fill-opacity="1"></rect><g><path d="M116 60A90 90 0 0 1 201.9792 123.3998L173.3195 132.2665A60 60 0 0 0 116 90Z" fill="rgb(6,160,255)"></path><path d="M201.9792 123.3998A90 90 0 0 1 205.6498 142.0681L175.7665 144.7121A60 60 0 0 0 173.3195 132.2665Z" fill="rgb(245,71,71)"></path><path d="M205.6498 142.0681A90 90 0 0 1 106.4871 239.4958L109.6581 209.6639A60 60 0 0 0 175.7665 144.7121Z" fill="rgb(247,165,0)"></path><path d="M106.4871 239.4958A90 90 0 0 1 116 60L116 90A60 60 0 0 0 109.6581 209.6639Z" fill="rgb(153,153,153)"></path><path d="M-5 -5l95.3008 0l0 104l-95.3008 0Z" transform="translate(249.6992 103)" fill="rgb(0,0,0)" fill-opacity="0" stroke="#ccc" stroke-width="0"></path><path d="M0 0l16 0l0 16l-16 0Z" transform="translate(249.6992 103)" fill="#06A0FF"></path><text dominant-baseline="central" text-anchor="start" style="font-size:12px;font-family:Microsoft YaHei;" xml:space="preserve" x="21" y="8" transform="translate(249.6992 103)" fill="#333">运行中 3%</text><path d="M0 0l16 0l0 16l-16 0Z" transform="translate(249.6992 129)" fill="#F54747"></path><text dominant-baseline="central" text-anchor="start" style="font-size:12px;font-family:Microsoft YaHei;" xml:space="preserve" x="21" y="8" transform="translate(249.6992 129)" fill="#333">异常 20%</text><path d="M0 0l16 0l0 16l-16 0Z" transform="translate(249.6992 155)" fill="#F7A500"></path><text dominant-baseline="central" text-anchor="start" style="font-size:12px;font-family:Microsoft YaHei;" xml:space="preserve" x="21" y="8" transform="translate(249.6992 155)" fill="#333">未运行 28%</text><path d="M0 0l16 0l0 16l-16 0Z" transform="translate(249.6992 181)" fill="#999999"></path><text dominant-baseline="central" text-anchor="start" style="font-size:12px;font-family:Microsoft YaHei;" xml:space="preserve" x="21" y="8" transform="translate(249.6992 181)" fill="#333">草稿 48%</text><path d="M-5 -14l82 0l0 28l-82 0Z" transform="translate(79 150)" fill="rgb(0,0,0)" fill-opacity="0" stroke="#ccc" stroke-width="0"></path><text dominant-baseline="central" text-anchor="start" style="font-size:18px;font-family:Microsoft YaHei;font-weight:bold;" transform="translate(79 150)" fill="#464646">运行状态</text></g></svg> */}
    </div>
  );
}

export default App;
