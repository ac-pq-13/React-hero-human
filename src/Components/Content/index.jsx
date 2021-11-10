import React from 'react'
import {  Switch, Route, Redirect} from 'react-router-dom'
import About from '../../Pages/About'
import Heroes from '../../Pages/Heroes'
import Humans from '../../Pages/Humans'
import Home from '../../Pages/Home'
import Error404 from '../../Pages/Error404'


import './style.scss'
const Content = () => {
    return (
        <div className="v_main__wrapper">
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" />}/>
                <Route path="/heroes" exact>
                    <Heroes /> 
                </Route>
                <Route path="/humans">
                    <Humans />
                </Route>
                <Route path="/about">
                    <About />
                </Route> 
                <Route path="/home">
                    <Home/>
                </Route>
                <Route>
                    <Error404 />
                </Route>
            </Switch>
        </div>
    )
}

export default Content
