import React from 'react';
import Canvas from './components/Canvas';
import fakeData from './fake_data.json'

function App() {
  return (
    <div className="App">
      <Canvas dataSource={fakeData} width={600} height={300} radius={100} title="监控数据" />
    </div>
  );
}

export default App;
