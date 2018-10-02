import React, { Component } from 'react';
import Project from './Project'
import { arr } from '../data.js'
import uuid from 'uuid'

class ProjectContainer extends Component {

    render() {
        return (
            <div className="mx4 mt3 project-container fixed top-0 left-0 right-0">
                <div className="flex justify-center">
                    <p className="h2 project-text">Projects</p>
                    <p className="h2 project-text fixed right-0 mr4 close" onClick={this.props.toggleProject}>X</p>
                </div>
                <div className="projects-list flex flex-wrap my0 items-center justify-center overflow-scroll">
                    { arr.map(el => <Project datum={ el } key={ uuid() }/>) }
                </div>
            </div>
        );
    }
}

export default ProjectContainer;
