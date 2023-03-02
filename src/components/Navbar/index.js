import './index.css';

import {Link} from 'react-router-dom';

// import { GrMapLocation } from "react-icons/gr";
// import { GrMap } from "react-icons/gr";
import { MdOutlineRouter } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiMapAlt } from "react-icons/tfi";

const Navbar = () =>{

    return(
        <div className='nav-bar-bg-container'>
            <div className='nav-items-container'>
                <Link to='/'>
                    <TfiMapAlt fill='white' className='nav-icon'/>
                </Link>
                <Link to='/agents'>
                    <MdOutlineRouter fill='white' className='nav-icon'/>
                </Link>
                <Link to='/test-config'>
                    <IoSettingsOutline className='testconfig-icon'/>
                </Link>
            </div>
            <Link to='/user-account'>
                    <FaUser fill='white' className='nav-icon'/>
            </Link>
        </div>
    )
   
}

export default Navbar
