import React from 'react'
import './Countdown.css'

export default function Countdown() {

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date();
    const seasonDate = new Date(2020, 8, 10);
    const superbowlDate = new Date(2021, 1, 7);

    const daysToSeason = Math.round(Math.abs((firstDate - seasonDate) / oneDay));
    const daysToSuperbowl = Math.round(Math.abs((firstDate - superbowlDate) / oneDay));

    return (
        <div className='countdown'>
            <div className='season-countdown'>
                <p>{daysToSeason}</p>
                <p>days until season kick-off</p>
            </div>
            <div className='superbowl-countdown'>
                <p>{daysToSuperbowl}</p>
                <p>days until Superbowl LV</p>
            </div>
        </div>
    )
}