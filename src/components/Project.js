import React, { Component } from 'react';

class Project extends Component {


    render() {
        return (
            <div className="project px2">
                    <p className="center h3"><a href={this.props.datum.href} target="_blank" className="nav-links">{this.props.datum.name}</a></p>
                    <p className="center">{this.props.datum.description}</p> 
                    <p className="center">stack: {this.props.datum.stack}</p>
            </div>
        );
    }
}

export default Project;
