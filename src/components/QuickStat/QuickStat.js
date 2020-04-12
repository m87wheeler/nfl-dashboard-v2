import React from 'react'
import './QuickStat.css'

export default function QuickStat(props) {
    return (
        <div className='stat-card'>
            <h6>{props.statTitle}</h6>
            <p>{props.statData}</p>
        </div>
    )
}