import react from 'react'
import Header from './components/header_footer/header'
import Featured from './components/featured/featured'
const App = () =>{
    return(
       <div className = "app" style={{
           height: '2000px'
       }}>
           <Header />
           <Featured />
       </div>
    )
}

export default App