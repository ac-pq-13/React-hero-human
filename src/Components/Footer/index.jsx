import React from 'react'
import {useSelector} from 'react-redux'
import './style.scss'

const Footer = () => {
    const store = useSelector((s)=>s.year)
    return (
        <div className="c_footer__wrapper" >
            Marvel 20{store.selected} Copyright © . Todos los derechos reservados 
        </div>
    )
}

export default Footer