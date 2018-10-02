import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Bio from './components/Bio'
import ProjectContainer from './components/ProjectContainer'

class App extends Component {

  constructor() {
    super()
    this.state = {
      projects: false
    }
  }

  renderProjects = () => { 
    this.setState({ projects: true })
  }

  toggleProject = () => {
    this.setState({ projects: false})
  }

  render() {
    return (
    <div className="App mx4 my3">
      <div className="flex justify-center items-center">
        <p className="head-text h2">Brooke Scarlett Yalof</p>
      </div>
      <div className="flex">
        <div><Nav renderProjects={this.renderProjects}/></div>
        <div>
        < Bio />
        { this.state.projects ? <ProjectContainer toggleProject={this.toggleProject}/> : null }
        </div>
    </div>
    <div className="fixed bottom-0 mb2">
        <span role="img" aria-label="wink">😏</span> Brooke Scarlett 
    </div>
  </div>
    );
  }
}

export default App;
