import React from 'react'
import Header from './components/header_footer/header'
import Featured from './components/featured/featured'
import Services from './components/services/services'
import About from './components/about/About'
const App = () =>{
    return(
       <div className = "app" style={{
           height: '2000px'
       }}>
           <Header />
           <Featured />
           <Services />
           <About />
       </div>
    )
}

export default App