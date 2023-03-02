import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import wirelessnetwork from "../../assets/wirelessnetwork.svg";


 

export default class PinLocation extends Component {

    static defaultProps = {};


    shouldComponentUpdate = shouldPureComponentUpdate;

    onClickOfAgent = () =>{
        alert("agent clicked")
    }

    constructor(props) {
        super(props);
    }

    render() {
        let locationBGColor = ""

        switch(this.props.locationStatus){
            case "high":
                locationBGColor = 'bg-green';
                break;
            case "moderate":
                locationBGColor='bg-yellow';
                break;
            case "low":
                locationBGColor='bg-red';
                break;
            default:
                locationBGColor = 'bg-green';
                break;
        }
        return (

            <div className={`pin-location-bg ${locationBGColor}`}>
                <img src={wirelessnetwork} alt="agent" onClick={this.onClickOfAgent}/>
            </div>
        );
    }
}