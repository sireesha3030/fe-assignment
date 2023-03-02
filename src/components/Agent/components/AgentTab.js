import React, { Component } from 'react'
import { BsChevronDown, BsChevronRight } from 'react-icons/bs'

import AccessPoint from './AccessPointTab'

class AgentTab extends Component {

    state = { activeAccessPoint: null }

    setMeActiveAgent = () => {
        const { setActiveAgent, agent } = this.props
        setActiveAgent(agent.id)
    }

    setActiveAccessPoint = (id) => {
        this.setState({ activeAccessPoint: id })
    }

    render() {
        const { isActive, agent } = this.props
        const { activeAccessPoint } = this.state

        return (
            <li className='agent-tab'>
                <button className={`agent-tab-btn ${isActive && "active-agent-tab-btn"}`} onClick={this.setMeActiveAgent} >
                    <span >{agent.agentName}</span>
                    {isActive ? <BsChevronDown /> : <BsChevronRight />}

                </button>
                {isActive && <ul className='agents-sub-tabs-con'>
                    {
                         agent.accessPoints.map((each) => (
                            <AccessPoint key={each.id} ap={each} setActiveAccessPoint={this.setActiveAccessPoint} isActive={activeAccessPoint === each.id}/>
                        ))
                    }
                   
                </ul>}
            </li>
        )
    }
}

export default AgentTab





// AgentTab.contextType = AgentContext;


