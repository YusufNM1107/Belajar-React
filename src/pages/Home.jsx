import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tutors from '../components/Tutors'
import Partners from '../components/Partners'
import Contact from '../components/Contact'

import { homeSection } from '../data/HomeSection'
import { courseSetion } from '../data/CourseSection'
import { tutorsSection, tutorsList } from '../data/TutorsSection'
import { partnersSection, partnersList } from '../data/PartnersSection'
import { contactSection } from '../data/ContactSection'

import parse from 'html-react-parser'
import '../styles/Home.css'
function Home() {
  return (
    <>
      <Navbar />
      {/* home */}

      <div className="wrapper">
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>

        {/* Course */}

        <section id="courses">
          {parse(courseSetion.content)}
          <img src={courseSetion.image} />
        </section>

        {/* Tutors */}
              
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                     {parse(tutorsSection.content)}     
                </div>
                <Tutors tutorsList={tutorsList} />
            </div>
        </section>

        {/* Partners */}

          <section id="partners">
            <div className="tengah">
              <div className="kolom">
              {parse(partnersSection.content)}
              </div>
            <Partners partnersList={partnersList} />
            </div>
          </section>
        
        {/* Contact */}

        <Contact contactSection={contactSection} />

      </div>
      <Footer />
    </>
  );
}

export default Home
