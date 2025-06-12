import Footer from "../footer/Footer";
import Header from "../header/Header";

const CoursesPage = () => {
  return (
    <div>
      <Header/>
    <div className="page-container">
      <h1>Our Academic Programs</h1>
      <p>
        Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the 
        knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends 
        and academic advancements.
      </p>
       <h2>Discover Campus Life</h2>
           <div className="video-container">
        <video controls autoPlay muted loop className="course-video">
          <source src="public/video/college-tour.mp4" type="video/ mp4" />
          Your browser does not support the video tag.
        </video>
       </div>

    </div>
      <Footer/>
    </div>
  );
};

export default CoursesPage;
