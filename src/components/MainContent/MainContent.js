import React from 'react'
import './MainContent.css'

export default function MainContent(props) {
    return (
        <main className='main-content'>
            {props.children}
        </main>
    )
}