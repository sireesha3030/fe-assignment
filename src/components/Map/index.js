import React, { Component } from 'react';

// import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';

import PinLocation from './PinLocation';
import './index.css';

const agentData =[
    {
        lat:'13.5560',
        lng:'78.5010',
        agentName:'a1',
        locationStatus:'high'
    },
    {
        lat:'23.5560',
        lng:'88.5010',
        agentName:'a2',
        locationStatus:'moderate'
    },
    {
        lat:'43.5560',
        lng:'58.5010',
        agentName:'a1',
        locationStatus:'high'
    },
    {
        lat:'30.3753',
        lng:'69.3451',
        agentName:'a1',
        locationStatus:'low'
    },
    {
        lat:'30.3753',
        lng:'30.3451',
        agentName:'a1',
        locationStatus:'low'
    }

] 

function createMapOptions(maps) {
    return {
        zoomControlOptions: {
            position: maps.ControlPosition.RIGHT_CENTER,
            style: maps.ZoomControlStyle.SMALL
        },
        mapTypeControlOptions: {
            position: maps.ControlPosition.TOP_RIGHT
        },
        mapTypeControl: true
    };
}

class SimpleMapPage extends Component {
   
    static defaultProps = {
        center: [13.5560, 78.5010],
        zoom: 3,
        greatPlaceCoords: { lat: 13.5560, lng: 78.5010 }
    };


    render() {
        return (
            <div className='home-bg-container'>
                <GoogleMap
                    // apiKey={YOUR_GOOGLE_MAP_API_KEY} 
                    center={this.props.center}
                    zoom={this.props.zoom}
                    options={createMapOptions}>                    
                        {
                            agentData.map(eachAgent=> (<PinLocation lat={eachAgent.lat} lng={eachAgent.lng} text={eachAgent.agentName} locationStatus={eachAgent.locationStatus}/>))
                        }
                </GoogleMap>
                <div className='home-page-search-bar-container'>
                    <input type="search" className='home-page-search-bar' placeholder='Group/Location/AgentName'/>
                </div>
            </div>

        );
    }
}

export default SimpleMapPage