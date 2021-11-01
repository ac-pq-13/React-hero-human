import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Content from '../Components/Content'
// import Content from '../Components/Content'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import './style.scss'
const View = () => {
    return (
        <Router>
            <div className="v_wrapper">
                <Header />
                <Content />
                <Footer />
            </div>
        </Router>
    )
}

export default View
