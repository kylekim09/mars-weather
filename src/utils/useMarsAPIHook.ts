
import {MarsData, MarsDataList} from './interfaces';
import {useState, useEffect} from 'react';


//Custom Hooks, and API Parser Helper File
const parseData: Function = (request:any): MarsDataList => {
    
}

const getMarsData :Function = async (): Promise <MarsDataList>=> {
    const marsApiResponse = await fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
    const response: Object = await marsApiResponse.json();
    const parsedData:MarsDataList = parseData(response);
    return parsedData;
}

export default function useMarsAPI(): Array<any> {
    const [marsData, setMarsData] = useState<MarsDataList | null> (null);

    useEffect(() => {
        getMarsData().then((res:MarsDataList) => setMarsData(res));
      }, []);

      return [marsData];
}

