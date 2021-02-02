import React, {useState, useEffect} from 'react';
import './App.css';

// interface MarsData {
//   test: string
// }

const App: React.FC = () => {

  const [marsData, setMarsData] = useState<any | null>(null);

  const getMarsData = async ()  => {
    const marsApiResponse = await fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
    const response = await marsApiResponse.json();
    setMarsData(response)
  }

  useEffect(() => {
    getMarsData();
  },[]);
  
  return (
    <div className="App">
      <pre>{JSON.stringify(marsData)}</pre>
    </div>
  );
}

export default App;
