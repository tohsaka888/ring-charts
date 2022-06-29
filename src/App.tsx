import React from 'react';
import Canvas from './components/Canvas';
import fakeData from './fake_data.json'

function App() {
  return (
    <div>
      <Canvas dataSource={fakeData} width={500} height={300} radius={100} title="监控数据" />
    </div>
  );
}

export default App;
