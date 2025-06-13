import { useState } from "react";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import About from "./components/pages/AboutPage";
import AdmissionsPage from "./components/pages/AdmissionsPage";
import ContactPage from "./components/pages/ContactPage";
import CoursesPage from "./components/pages/CoursesPage";
import Home from "./components/pages/HomePage";
import { BrowserRouter,  Routes, Route} from 'react-router-dom'
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";


const App=() =>{
    const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);

  };
    return ( 
      <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Rasika Narake"
          studentPhotoUrl="/images/saniya.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
        <div>
           <ChatbotComponent/>  
          <BrowserRouter>
          
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/AboutPage' element={<About/>}></Route> 
            <Route path='/AdmissionsPage' element={<AdmissionsPage/>}></Route>
            <Route path='/ContactPage' element={<ContactPage/>}></Route>
                <Route path='/CoursesPage' element={<CoursesPage/>}></Route> 
          </Routes>
                         
          </BrowserRouter>



        </div>
</>
    )
 };
 export default App;