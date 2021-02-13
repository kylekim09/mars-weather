
import { MarsDataList} from './interfaces';
import {useState, useEffect} from 'react';


//Custom Hooks, and API Parser Helper File
const parseData = (request:any): MarsDataList => {
    const parsedData : MarsDataList = request.sol_keys.map((sol_key: number) => {
        return { [sol_key]: {
            ...request[sol_key],
            sol: sol_key
        }
    }
    });
    return parsedData;
}

const getMarsData = async (): Promise <MarsDataList>=> {
    const marsApiResponse: Response = await fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY=json&ver=1.0');
    const response = await marsApiResponse.json();
    console.log(response);
    const parsedData:MarsDataList = parseData(response);
    console.log(parsedData);
    return parsedData;
}

export default function useMarsAPI(): Array<any> {
    const [marsData, setMarsData] = useState<MarsDataList | null> (null);
    useEffect(() => {
        getMarsData().then((res:MarsDataList) => setMarsData(res));
      }, []);

      return [marsData];
}

