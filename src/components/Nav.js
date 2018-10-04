import React, { Component } from 'react'
import resume from '../assets/resume104.pdf'

export default class Nav extends Component {


    render() {
        return (
            <div className="navbar mr2">
                <p className="underline projs nav-links" onClick={this.props.renderProjects}>Projects</p>
                <p className="underline res"><a href={resume} target="_blank" rel="noopener noreferrer" className="text-decoration-none nav-links">Resume</a></p>
                <p className="underline git"><a href="https://github.com/brookescarlett" target="_blank" rel="noopener noreferrer" className="text-decoration-none nav-links">Github</a></p>
                <p className="underline insta"><a href="https://www.instagram.com/brookeyal/" target="_blank" rel="noopener noreferrer" className="text-decoration-none nav-links">Instagram</a></p>
                <p className="underline ct"><a href="mailto:bsyalof@gmail.com" className="text-decoration-none nav-links">Contact</a></p>
            </div>
        )
    }
}
