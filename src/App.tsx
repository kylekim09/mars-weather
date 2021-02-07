import React, {useState, useEffect} from 'react';
import { parse } from 'url';
import './App.css';


interface MarsData {
}
interface MarsDataList {
  marsDataList: MarsData[]
}

const App: React.FC = () => {

  const [marsData, setMarsData] = useState<MarsDataList | null>(null);

  const getMarsData = async (): Promise<void> => {
    const marsApiResponse = await fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
    const response: Object = await marsApiResponse.json();
    const parsedData:MarsDataList = parseData(response);
    setMarsData(parsedData);
  }

  useEffect(() => {
    getMarsData();
  },[]);
  
  const data: JSX.Element = <pre>{JSON.stringify(marsData)}</pre>

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
