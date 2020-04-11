import React from 'react'
import './Dropdown.css'

export default class Dropdown extends React.Component {
    render() {
        
    const mappedData = this.props.data.map(item => {
        return (
            <option 
                key={item[this.props.id]} 
                value={item[this.props.id]}
            >
                {item[this.props.name]}
            </option>
            )
        })
        

        return (
            <select onChange={this.props.action}>
                {mappedData}   
            </select>
        )
    }
}