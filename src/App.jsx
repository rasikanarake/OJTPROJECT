import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import About from "./components/pages/AboutPage";
import AdmissionsPage from "./components/pages/AdmissionsPage";
import ContactPage from "./components/pages/ContactPage";
import CoursesPage from "./components/pages/CoursesPage";
import Home from "./components/pages/HomePage";
import { BrowserRouter,  Routes, Route} from 'react-router-dom'

const App=() =>{
    return ( 
        <div>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/AboutPage' element={<About/>}></Route> 
            <Route path='/AdmissionsPage' element={<AdmissionsPage/>}></Route>
            <Route path='/ContactPage' element={<ContactPage/>}></Route>
                <Route path='/CoursesPage' element={<CoursesPage/>}></Route> 
          </Routes>
          
                            <ChatbotComponent/>

          </BrowserRouter>



        </div>

    )
 };
 export default App;