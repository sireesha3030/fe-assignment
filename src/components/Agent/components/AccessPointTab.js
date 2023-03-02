import { Component } from "react"

import './index.css';

class AccessPoint extends Component{


    setMeActiveAccessPoint = () =>{
        
        const {ap,setActiveAccessPoint} = this.props
        setActiveAccessPoint(ap.id)

    }

    render(){
        const {ap, isActive} = this.props

        return(
            <li className="access-point-con">
                <button className={`access-point-btn ${isActive?"active-access-point-btn":""}`} onClick={this.setMeActiveAccessPoint}>
                    {ap.name}
                </button>
            </li>
        )
    }
}

export default AccessPoint