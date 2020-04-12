import React from 'react'
import './Header.css'
import nflLogo from '../../images/logos/nfl-logo.png'
import Countdown from '../Countdown/Countdown'

export default function Header() {
    return (
        <header className='header-banner'>
            <div className='nfl-logo-container'>
                <img src={nflLogo} alt='NFL Logo' />
            </div>
            <Countdown />
        </header>
    )
}