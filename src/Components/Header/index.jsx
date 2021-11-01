import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
const Header= () => {
    return (
        <div className="v_header__wrapper">
        <div className="v_header__logo">
            <img src="https://i.pinimg.com/originals/be/d9/bf/bed9bfa46f19c034ce8e50179011eefc.png" alt="logo_platanitos" />
        </div>
        <div className="v_header__menu">
            <ul>
                <li>
                    <Link to="/heroes">Heroes</Link>
                </li>
                <li>
                    <Link to="/humans">Humans</Link>
                </li>
                {/* <li>
                    <Link to="/store">Tienda</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li> */}
            </ul>  
        </div>
        
    </div>
    )
}

export default Header
