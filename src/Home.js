import React, { Component } from 'react';
import App from './App'
import './App.css';

class Home extends Component {

    constructor(){
        super()
        this.state = {displayApp: false}
    }

    componentDidMount = () => {
        this.start()
    }

    start() {
        setInterval(this.animate, 4000)
        setInterval(this.animate, 1000)
    }
    
    animate = () => {
        let pElements = document.getElementsByClassName('yin')
        pElements.forEach = Array.prototype.forEach
        
        pElements.forEach((p, index) => {
            setTimeout(() => this.change(p), 1000 * (index + 1))
        })
    }

    change = (p) => {
        if (p.className === "yin") {
            p.className = "yin yang"
        } else {
            p.className = "yin"
        }
    }

    loadApp = () => {
        this.setState({
            displayApp: true
        })
    }


    render() {
        console.log('Thanks for the visit 😘')
        return (
            <div>
                {this.state.displayApp ? <App /> : 
                <div className="fixed top-0 bottom-0 left-0 right-0" onClick={this.loadApp}>
                    <div className="flex flex-column justify-center items-center home"  style={{marginTop: "20%"}}>
                        <p className="yin" id="1">YINYANG</p>
                        <p className="yin" id="2">YINYANG</p>
                        <p className="yin yang" id="3">YINYANG</p>
                        <p className="yin" id="4">YINYANG</p>
                        <p className="yin" id="5">YINYANG</p>
                    </div>
                        <p className="center ml3" style={{fontFamily: "Arial Black"}}>Have A Nice Day</p>
                    
                </div>}
            </div>
        );
    }
}

export default Home;
