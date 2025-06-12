import Footer from '../footer/Footer';
import Header from '../header/Header';
import './style.css'

const Home = () => {
	return (
    
<div className='main'>
   <Header/>
    <div class="content">
        <div class="page-container" >
          <div class="hero-section">
            <img alt="Vivekanand College Campus" 
            class="hero-banner-image" 
            src="/images/college-banner.png"/>
            <div class="hero-overlay-text">
              <h1>Welcome to Vivekanand College!</h1>
              <p>Your journey to excellence starts here.</p>
              <a class="btn hero-btn" href="/AdmissionsPage" data-discover="true">Apply Now!</a> 
            </div>
          </div>
    
    
      <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
<p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
<h2>Why Choose Vivekanand College?</h2>

<ul>
 <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
 <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
 <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
 <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
 <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>
</ul>
    
    <h2>Campus Life &amp; Facilities</h2>
    <div class="image-gallery">
      <img alt="Students studying in library" 
           src="images/students-studying.jpeg"/>
      <img alt="Students on campus ground" 
           src="images/campus-life.jpg"/>
    </div>    
        <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
        
        <div class="call-to-action">
          <p>Ready to explore our courses?</p>
          <a class="btn" href="/CoursesPage" data-discover="true">Explore Courses</a>
        </div>

        </div>
 </div>  
 <Footer/> 
</div>
)
}

export default Home;