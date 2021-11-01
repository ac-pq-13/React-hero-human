import React from 'react'
import {  Switch, Route} from 'react-router-dom'
// import About from '../../Pages/About'
import Heroes from '../../Pages/Heroes'
import Humans from '../../Pages/Humans'
// import Store from '../../Pages/Store'
import './style.scss'
const Content = () => {
    return (
        <div className="v_main__wrapper">
            <Switch>

                <Route path="/heroes" exact>
                    <Heroes /> 
                </Route>
                <Route path="/humans">
                    <Humans />
                </Route>
                {/* <Route path="/about">
                    <About />
                </Route> 
                <Route path="/store">
                    <Store/>
                </Route> */}
            </Switch>
        </div>
    )
}

export default Content
