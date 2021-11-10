import React from 'react'
import LogoError from '../../img/404_logo.svg'
import './style.scss'
const Error404 = () => {
    return (
        <div className ="p_error_wrapper">
            <img src={LogoError} alt="" />
        </div>
    )
}

export default Error404
