import React from 'react'

export default function QuickStat(props) {
    return (
        <div className='stat-container'>
            <h6>{props.statTitle}</h6>
            <p>{props.statData}</p>
        </div>
    )
}