import './index.css';
import { Component } from 'react';
import { BsSearch } from 'react-icons/bs'

import GroupTab from './components/GroupTab'
import { groups, data } from './dummyData';
import { LineChart, XAxis, CartesianGrid, Line, Tooltip} from "recharts";


import wifi from '../../assets/wifi.jpg';
import Application from '../../assets/Application.jpg';
import network from '../../assets/network.jpg';
import Smiley from '../../assets/Smiley.png';

const DATA_STATUS_SHOWN = {
    wifi: "WIFI STATUS",
    network: "NETWORK STATUS",
    application: "APPLICATION STATUS"
}

class Agent extends Component{

    state = {
        activeGroup: null,
        dataShowing: DATA_STATUS_SHOWN.wifi
    }


    setAsActiveGroup = (id) => {
        this.setState((prevState) => ({
            activeGroup: prevState.activeGroup === id ? null : id
        }))
    }


    filterAgents = (e) => {
        e.preventDefault()
    }

    renderNetworkWifiApplicationStatus = () =>{
        const {dataShowing} = this.state
        switch(dataShowing){

            case DATA_STATUS_SHOWN.wifi:
                return (
                    <div className='wifi-status-card'>
                        <h3 className='status-header'>Wifi Status</h3>
                        <ul className='status-metrics-list'>
                            <li>
                                channel: 60
                            </li>
                            <li>
                                Birate: 4500kbps
                            </li>
                            <li>
                                SignalStrength: 60%
                            </li>
                            <li>
                                channel utilization: 30%
                            </li>
                        </ul>
                    </div>
                )
            case DATA_STATUS_SHOWN.network:
                return (
                    <div className='wifi-status-card'>
                        <h3 className='status-header'>Network Status</h3>
                        <ul className='status-metrics-list'>
                            <li>
                                channel: 60
                            </li>
                            <li>
                                Birate: 4500kbps
                            </li>
                            <li>
                                SignalStrength: 60%
                            </li>
                            <li>
                                channel utilization: 30%
                            </li>
                        </ul>
                    </div>
                )
            case DATA_STATUS_SHOWN.application:
                return (
                    <div className='wifi-status-card'>
                        <h3 className='status-header'>Application Status</h3>
                        <ul className='status-metrics-list'>
                            <li>
                                channel: 60
                            </li>
                            <li>
                                Birate: 4500kbps
                            </li>
                            <li>
                                SignalStrength: 60%
                            </li>
                            <li>
                                channel utilization: 30%
                            </li>
                        </ul>
                    </div>
                )

            default:
                return null

        }
    }

    renderOverallStatusAndGraph = () =>{

        return(
            <div className='overall-status-graph-con'>
            <div className='overall-status-con'>
                <h2 className='overall-status-header'>Overall Status</h2>
                <img src={Smiley} alt="overall-status" className='overall-status-img'/>
            </div>
            <div className='graph-con'>
                {/* <h1>Developing</h1> */}
                <LineChart
                    width={400}
                    height={200}
                    data={data}
                    margin={{ top: 10, right: 20, left: 30, bottom: 5 }}
                >
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                </LineChart>
                
            </div>
        </div>
        )
        
    }

    renderAgentDetails = () => {
        return (
            <div className='display-container'>
                {this.renderOverallStatusAndGraph()}

                <div className='network-wifi-application-con'>
                    <div className='network-cards' onClick={() => {
                        this.setState({ dataShowing: DATA_STATUS_SHOWN.wifi })
                    }}>
                        <span >
                            Wifi Status
                        </span>
                        <img src={wifi} className='network-card-img' alt='Wifi Status' />
                    </div>
                    <div className='network-cards' onClick={() => {
                        this.setState({ dataShowing: DATA_STATUS_SHOWN.network })
                    }}>
                        <span >
                            Network Status
                        </span>
                        <img src={network} className='network-card-img' alt='network Status' />

                    </div>
                    <div className='network-cards' onClick={() => {
                        this.setState({ dataShowing: DATA_STATUS_SHOWN.application })
                    }}>
                        <span >
                            Application Status
                        </span>
                        <img src={Application} className='network-card-img' alt='Application Status' />

                    </div>
                </div>

                {this.renderNetworkWifiApplicationStatus()}
            </div>

        )
    }

    render(){
        const { activeGroup} = this.state

        return(
                <div className='agent-bg-container'>
                    <div className='sub-nav-con'>
                        <div className='search-bar-con'>
                            <form onSubmit={this.filterAgents} className='search-form'>
                                <input type="search" className='search-input' placeholder='search-agents'/>
                                <button type="submit" className='search-submit-btn'>
                                    <BsSearch />
                                </button>
                            </form>
                        </div>

                        {/* showing groups */}
                        <ul className='groups-con'>
                                    {
                                        groups.map((eachGroup) => (
                                            <GroupTab key={eachGroup.gid} group={eachGroup} isActive={eachGroup.gid === activeGroup} setActiveGroup={this.setAsActiveGroup} />
                                        ))
                                    }
                        </ul>

                    </div>
                    
                    {this.renderAgentDetails()}
                    {/* <h1 className='development-warn'>Agent yet develop</h1> */}
                </div>            
        )
    }
       
       
}

export default Agent