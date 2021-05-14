
import { MarsDataList} from './interfaces';
import {useState, useEffect} from 'react';
import { parse } from 'path';


//Custom Hooks, and API Parser Helper File
const parseData = (request:any): MarsDataList => {
    const parsedData : MarsDataList = request.validity_checks.sols_checked.map((sol_key: number) => {
        return {
            ...request.validity_checks[sol_key],
            sol: sol_key
        }
    });
    return parsedData;
}

const getMarsData = async (): Promise <MarsDataList>=> {
    const marsApiResponse: Response = await fetch('https://api.nasa.gov/insight_weather/?api_key=uM6RRqJC5jPTbDSGuTzxsE449DfHjnOlctL0jtfP&feedtype=json&ver=1.0');
    const response = await marsApiResponse.json();
    console.log(response, 'here');
    const parsedData:MarsDataList = parseData(response);
    console.log(parsedData)
    return parsedData;
}

export default function useMarsAPI(): Array<any> {
    const [marsData, setMarsData] = useState<MarsDataList | null> (null);
    useEffect(() => {
        getMarsData().then((res:MarsDataList) => setMarsData(res));
      }, []);

      return [marsData];
}

