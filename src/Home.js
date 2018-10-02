import React, { Component } from 'react';
import App from './App'
import './App.css';

class Home extends Component {

    constructor(){
        super()
        this.state = {
            displayApp: false, 
            displayedText: "Have A Nice Day"
        }
    }

    componentDidMount = () => {
        // this.start()
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

    changeText = (num) => {
        switch(num) {
            case 1:
                return this.setState({ displayedText: "For Saying Hi" })
            case 2: 
                return this.setState({ displayedText: "Click To Enter" })
            case 3:
                return this.setState({ displayedText: "For Being Kind" })
            case 4:
                return this.setState({ displayedText: "Click To Enter" })
            case 5:
                return this.setState({ displayedText: "For Stopping By" })
            case 6:
                return this.setState({ displayedText: "Have A Nice Day" })
            default:
                return null

        }
    }


    render() {
        console.log('Thanks for the visit 😘')
        return (
            <div>
                {this.state.displayApp ? <App /> : 
                <div className="fixed top-0 bottom-0 left-0 right-0" onClick={this.loadApp}>
                        <div className="flex flex-column justify-center items-center home" style={{ marginTop: "20%" }} onMouseLeave={this.changeText.bind(null, 6)}>
                        <p className="yin" id="1" onMouseEnter={this.changeText.bind(null, 1)}>THANKYOU</p>
                        <p className="yin" id="2" onMouseEnter={this.changeText.bind(null, 2)}>THANKYOU</p>
                        <p className="yin" id="3" onMouseEnter={this.changeText.bind(null, 3)}>THANKYOU</p>
                        <p className="yin" id="4" onMouseEnter={this.changeText.bind(null, 4)}>THANKYOU</p>
                        <p className="yin" id="5" onMouseEnter={this.changeText.bind(null, 5)}>THANKYOU</p>
                        <p style={{fontFamily: "Arial Black"}}>{this.state.displayedText}</p>
                    </div>
                    
                  
                </div>}
            </div>
        );
    }
}

export default Home;
