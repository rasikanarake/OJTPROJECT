import Home from "./components/pages/HomePage";
import { BrowserRouter,  Routes, Route} from 'react-router-dom'

const App=() =>{
    return ( 
        <div>
      
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>

              {/* <Route path='/about' element={<About/>}></Route>  */}
          </Routes>
          </BrowserRouter>
          
        </div>

    )
 };
 export default App;