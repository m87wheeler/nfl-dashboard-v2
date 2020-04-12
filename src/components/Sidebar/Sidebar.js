import React from 'react'
import './Sidebar.css'
import Button from '../Button/Button'

export default function Sidebar(props) {
    return (
        <div className='sidebar'>
            {props.children}
            <nav className='sidebar-nav'>
                <Button text='Team Stats' />
                <Button text='Player Stats' />
                <Button 
                    text='Team Bio'
                    action={props.action} />
            </nav>
        </div>
    )
}