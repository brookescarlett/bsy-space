import React, { Component } from 'react';
import Project from './Project'
import { arr } from '../data.js'


class ProjectContainer extends Component {

    render() {
        return (
            <div className="mx4 mt3 project-container fixed top-0 left-0 right-0">
                <div className="flex justify-center">
                    <p className="h2 head-text">Projects</p>
                    <p className="h2 head-text fixed right-0 mr4 close" onClick={this.props.toggleProject}>X</p>
                </div>
                <div className="projects-list flex flex-wrap my0">
                    { arr.map(el => <Project datum={el} />) }
                </div>
            </div>
        );
    }
}

export default ProjectContainer;
