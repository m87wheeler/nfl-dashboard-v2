import React from 'react'
import './Button.css'

export default function Button(props) {
    return (
        <button 
            onClick={props.action}
            className={props.className}>
                {props.text}
        </button>
    )
}