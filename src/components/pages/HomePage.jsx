import Header from '../header/Header';
import './style.css'

const Home = () => {
	return (
    
<div>
   <Header/>
    <div class="content">
        <div class="page-container" >
          <div class="hero-section">
            <img alt="Vivekanand College Campus" class="hero-banner-image" src="/images/college-banner.png"/>
            <div class="hero-overlay-text">
              <h1>Welcome to Vivekanand College!</h1>
              <p>Your journey to excellence starts here.</p>
              <a class="btn hero-btn" href="/admissions" data-discover="true">Apply Now!</a> 
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
        </div>

 </div>   
</div>
)
}

export default Home;