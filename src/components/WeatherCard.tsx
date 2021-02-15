import {MarsData} from '../utils/interfaces'
import './styles/WeatherCard.css';
import React from 'react';

interface weatherProps{
    MarsData: MarsData
}

const WeatherCard: React.FC <weatherProps> = (props: weatherProps) => {

    return (
        <section className = "card">
            <p>{JSON.stringify(props.MarsData)} </p>
       </section>
    )
}

export { WeatherCard };
