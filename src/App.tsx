import React from 'react';
import { RingCharts } from './components';
import fakeData from './fake_data.json'

function App() {
  return (
    <div>
      <RingCharts dataSource={fakeData} width={500} height={300} radius={100} title="监控数据" />
    </div>
  );
}

export default App;
