import About from "./components/pages/AboutPage";
import Home from "./components/pages/HomePage";
import { BrowserRouter,  Routes, Route} from 'react-router-dom'

const App=() =>{
    return ( 
        <div>
      
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
             <Route path='/AboutPage' element={<About/>}></Route>  
          </Routes>
          </BrowserRouter>
          
        </div>

    )
 };
 export default App;