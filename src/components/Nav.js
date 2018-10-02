import React, { Component } from 'react'

export default class Nav extends Component {


    render() {
        return (
            <div className="navbar mr2">
                <p className="underline projs nav-links" onClick={this.props.renderProjects}>Projects</p>
                <p className="underline res nav-links"><a href="" target="_blank" rel="noopener noreferrer" className="text-decoration-none nav-links">Resume</a></p>
                <p className="underline git nav-links"><a href="https://github.com/brookescarlett" target="_blank" rel="noopener noreferrer" className="text-decoration-none nav-links">Github</a></p>
                <p className="underline insta nav-links"><a href="https://www.instagram.com/brookeyal/" target="_blank" rel="noopener noreferrer" className="text-decoration-none nav-links">Instagram</a></p>
                <p className="underline ct nav-links"><a href="mailto:bsyalof@gmail.com" className="text-decoration-none nav-links">Contact</a></p>
            </div>
        )
    }
}
