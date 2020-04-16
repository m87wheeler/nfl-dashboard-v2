import React, { Component } from 'react'

class Toggler extends Component {
    state = {
        visible: this.props.defaultVisibleValue
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                visible: !prevState.visible
            }
        })
    }

    render() {
        const Component = this.props.component
        return (
            <Component 
                visible={this.state.visible} 
                toggle={this.toggle} 
                {...this.props} 
            />
        )
    }
}

export function withToggler(component, optionsObj) {
    return function(props) {
        return (
            <Toggler    
                component={component} 
                defaultVisibleValue={optionsObj.defaultVisibleValue} 
                {...props} 
            />
        )
    }
} 