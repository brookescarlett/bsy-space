import React, { Component } from 'react';
import Project from './Project'
import { arr } from '../data.js'


class ProjectContainer extends Component {

    render() {
        return (
            <div className="m4 project-container fixed top-0 left-0 bottom-0 right-0">
                <div className="flex justify-center">
                    <p className="h2">Projects</p>
                    <p className="h2 fixed right-0 mr4 close" onClick={this.props.toggleProject}>X</p>
                </div>
                <div className="projects-list flex flex-wrap justify-center items-center overflow-scroll scroll">
                    { arr.map(el => <Project datum={el} />) }
                </div>
            </div>
        );
    }
}

export default ProjectContainer;
