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
                return this.setState({ displayedText: "You Are Very Talented In Many Ways" })
            case 2: 
                return this.setState({ displayedText: "A Dream You Have Will Come True" })
            case 3:
                return this.setState({ displayedText: "Have A Nice Day" })
            case 4:
                return this.setState({ displayedText: "The Fortune You Seek Is In Another Cookie" })
            case 5:
                return this.setState({ displayedText: "Click To Enter" })
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
                    <div className="flex flex-column justify-center items-center home"  style={{marginTop: "20%"}}>
                        <p className="yin" id="1" onMouseEnter={this.changeText.bind(null, 1)}>YINYANG</p>
                        <p className="yin" id="2" onMouseEnter={this.changeText.bind(null, 2)}>YINYANG</p>
                        <p className="yin" id="3" onMouseEnter={this.changeText.bind(null, 3)}>YINYANG</p>
                        <p className="yin" id="4" onMouseEnter={this.changeText.bind(null, 4)}>YINYANG</p>
                        <p className="yin" id="5" onMouseEnter={this.changeText.bind(null, 5)}>YINYANG</p>
                        <p style={{fontFamily: "Arial Black"}}>{this.state.displayedText}</p>
                    </div>
                    
                  
                </div>}
            </div>
        );
    }
}

export default Home;
