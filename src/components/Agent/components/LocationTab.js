import React, { Component } from 'react'
import { BsChevronDown, BsChevronRight } from 'react-icons/bs'
import AgentTab from './AgentTab'

export class LocationTab extends Component {

    state = { activeAgent: "" }

    setMeActiveLocation = () => {
        const { location, setActiveLocation } = this.props
        setActiveLocation(location.lid)
    }

    setActiveAgent = (id) => {
        this.setState((prevState) => ({
            activeAgent: prevState.activeAgent === id ? null : id
        }))
    }

    render() {
        const { isActive, location } = this.props
        const { activeAgent } = this.state
        return (
            <li className='location-tab'>
                <button onClick={this.setMeActiveLocation} className={`location-tab-btn ${isActive && "active-location-btn"}`}>
                    <span >{location.locationName}</span>
                    {isActive ? <BsChevronDown /> : <BsChevronRight />}

                </button>
                {
                    isActive &&
                    <ul className="agent-tabs-con">
                        {
                            location.agents.map((each) => (
                                <AgentTab key={each.id} isActive={each.id === activeAgent} agent={each} setActiveAgent={this.setActiveAgent} />
                            ))
                        }
                    </ul>
                }
            </li>
        )
    }
}

export default LocationTab