import React from 'react'
import './PopupWindow.css'
import Button from '../Button/Button'

export default class PopupWindow extends React.Component {

    render() {
        return (
            <div className='popup popout' style={{display: this.props.display}}>
                <div className='close-window' onClick={this.props.action}>
                    <div className='bar bar1'></div>
                    <div className='bar bar2'></div>
                </div>
                <h1>
                    <img src={this.props.teamLogo} alt={this.props.title} />
                    <span>{this.props.title}</span>
                </h1>
                <div className='buttons'>
                    <Button 
                        className='active'
                        text='Team Biography' 
                        action={console.log('Team Bio')}
                    />
                    <Button 
                        className={''}
                        text='Stadium Info'
                        action={console.log('Stadium Info')}
                    />
                </div>
                <div className='dynamic-content'>
                    <p>{this.props.teamBio}</p>
                    <img className='team-jersey' src={this.props.teamJersey} alt='Team Jersey' />
                </div>
            </div>
        )
    }
}