import React, { PureComponent } from 'react'
import Home from '../Home'
import GraphPage from '../WELCOME'

class Graph extends PureComponent {

    render(){
        return (
            <Home location={this.props.location}>
                <GraphPage />
            </Home>
        )
    }
}

export default Graph