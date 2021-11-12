import React from 'react'
import { BsBank } from 'react-icons/bs';

import './Nav.css';

 const Nav = () => {
    return (
        <div className="header">
            <h1 className="header-nav">iBANK&nbsp;<BsBank size={90} className="bankIcon" /></h1>
            
        </div>
    )
}

export default Nav;
