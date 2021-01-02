import React from 'react'
import Header from './components/header_footer/header'
import Featured from './components/featured/featured'
import Services from './components/services/services'
import About from './components/about/About'
import Location from './components/location/location'
import Footer from './components/footer/footer'
import {Element} from 'react-scroll'
const App = () =>{
    return(
       <div className = "app" style={{
           height: '2000px'
       }}>  <Header />
            <Element name = "home">
                <Featured />
            </Element>
            <Element  name = "services">
                <Services />
            </Element>
            <Element name = "about">
             <About />
            </Element>
             <Element name = "location">
                <Location />
            </Element>
       </div>
    )
}

export default App