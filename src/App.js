import react from 'react'
import {BrowserRouter} from 'react-router-dom'

const App = () =>{
    return(
       <BrowserRouter>
        <div className = "App">
            <Routes />
        </div>
       </BrowserRouter>
    )
}

export default App