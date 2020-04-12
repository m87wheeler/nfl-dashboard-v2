import React from 'react'
import './TeamBio.css'

export default class TeamBio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teamId: ''
        }
    }

    render() {

        return (
            <div className='bio-container'>
                <div className='team-badge'>
                    <img src={this.props.badge} alt="Team Badge" />
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>Head Coach:</td>
                            <td>{this.props.coach}</td>
                        </tr>
                        <tr>
                            <td>Year Formed:</td>
                            <td>{this.props.yearFormed}</td>
                        </tr>
                        <tr>
                            <td>Stadium:</td>
                            <td>{this.props.stadium}</td>
                        </tr>
                        <tr>
                            <td>City:</td>
                            <td>{this.props.city}</td>
                        </tr>
                        <tr>
                            <td>Capacity:</td>
                            <td>{this.props.capacity}</td>
                        </tr>
                        <tr>
                            <td className='website'>Official Website</td>
                            <td>
                                <a href={this.props.website} rel='noopener noreferrer' target='_blank'>Visit Site</a>
                            </td>
                        </tr>
                    </tbody>
                </table>                    
            </div>
        )
    }
}