import React, { Component } from 'react'

export default class Nav extends Component {


    render() {
        return (
            <div className="mr2">
                <p className="underline" onClick={this.props.renderProjects}>Projects</p>
                <p className="underline"><a href="" target="_blank" className="text-decoration-none nav-links">Resume</a></p>
                <p className="underline"><a href="https://github.com/brookescarlett" target="_blank" className="text-decoration-none nav-links">Github</a></p>
                <p className="underline"><a href="https://www.instagram.com/brookeyal/" target="_blank" className="text-decoration-none nav-links">Instagram</a></p>
                <p className="underline"><a href="mailto:bsyalof@gmail.com" className="text-decoration-none nav-links">Contact</a></p>
            </div>
        )
    }
}
