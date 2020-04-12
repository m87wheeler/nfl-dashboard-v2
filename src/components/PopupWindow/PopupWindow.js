import React from 'react'
import './PopupWindow.css'

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
                <h4>Team Biography</h4>
                <p>{this.props.teamBio}</p>
            </div>
        )
    }
}