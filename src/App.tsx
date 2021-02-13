import React from 'react';
import useMarsAPI from './utils/useMarsAPIHook';
import {WeatherCard }from './components/WeatherCard';
import {MarsData} from './utils/interfaces'
import './App.css';

const App: React.FC = () => {

  const [MarsData] = useMarsAPI();

  return (
    <div className="App">
      { 
        MarsData && MarsData.map((iterator:any) => <WeatherCard key={iterator.sol} ></WeatherCard>) 
      }
    </div>
  );
}

export default App;
