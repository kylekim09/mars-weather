import React from 'react';
import useMarsAPI from './utils/useMarsAPIHook';
import {WeatherCard }from './components/WeatherCard';
import {MarsData} from './utils/interfaces';
import { WeatherHeadLine } from './components/WeatherHeadLine';
import './App.css';

const App: React.FC = () => {

  const [MarsDataList] = useMarsAPI();

  return (
    <div className="App">
      <WeatherHeadLine> </WeatherHeadLine>
      <div className="flex"> 
      { 
        MarsDataList && MarsDataList.map((iterator:MarsData) => <WeatherCard key={iterator.sol} MarsData={iterator}> </WeatherCard>) 
      }
      </div>
    </div>
  );
}

export default App;
