import './Home.css';
// import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

import { FaSchool, FaGraduationCap, FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaBriefcase } from 'react-icons/fa';

import afghanGirls from './assets/landing_page_img.webp';
import primaryEdu from './assets/primary_edu_img.webp';
import collegeEdu from './assets/college_img.webp';
import UniversityEdu from './assets/university_img.webp';

import WhatWeDo from './WhatWeDo';

const Home = () => {
    return (
        <div>
            

            {/* langing page*/}
            <div className="home">
                <img role = "img" className="landing-page-img" src={afghanGirls} alt="afghan girls in class"></img>
                <h2 className='text-on-img1' >Investing in Afghan Women and Girls</h2>
                <h2 className='text-on-img2' > Ensuring Development in Afghanistan</h2>

            </div>


            {/* Display Data */}


            <div className="achievements-container">
                <h2>EDUCATION AND EMPOWERMENT ACHIEVEMENTS</h2>
                <div className="achievements-columns">
                    <div className="achievement-column">
                        <div className="achievement">
                            <FaSchool className="icon" aria-label="School icon"/>
                            <p> <strong>6 GIRLS' PRIMARY SCHOOLS</strong> SERVING OVER 3,600 STUDENTS</p>
                        </div>
                        <div className="achievement">
                            <FaGraduationCap className="icon" aria-label="Gradutation cap icon"/>
                            <p>TRAINED OVER <strong>400 WOMEN</strong> WITH HIGH SCHOOL DEGREES FOR ADVOCACY AND EMPLOYMENT.</p>
                        </div>
                        <div className="achievement">
                            <FaUserGraduate className="icon" aria-label="Graduate icon"/>
                            <p>ORUJ INSTITUTE OF HIGHER EDUCATION <strong>SERVES 900+ STUDENTS</strong> IN MORNING, AFTERNOON, AND EVENING SHIFTS.</p>
                        </div>
                    </div>
                    <div className="achievement-column">
                        <div className="achievement">
                            <FaChalkboardTeacher className="icon" aria-label="Teacher & chalkboard icon"/>
                            <p>CONDUCTED <strong>TEACHER TRAINING</strong> WORKSHOPS FOR <strong>174 EDUCATORS</strong></p>
                        </div>
                        <div className="achievement">
                            <FaBookOpen className="icon" aria-label="open book icon"/>
                            <p><strong>70%</strong> OF GRADUATES <strong>PASSED</strong> THE COLLEGE ENTRANCE EXAM AND PURSUED HIGHER EDUCATION</p>
                        </div>
                        <div className="achievement">
                            <FaBriefcase className="icon" aria-label="Briefcase icon"/>
                            <p><strong>482</strong> WOMEN AND GIRLS FURTHERING EDUCATION IN <strong>LEADERSHIP</strong>, MANAGEMENT & <strong>BUSINESS ADMINISTRATION</strong></p>
                        </div>
                    </div>
                </div>
            </div>




            {/*  what we do */}


            <div className='services-list'>
                {/* 1st item: Primary Education */}
                <Card className="my-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={primaryEdu} role = "img"   alt="image of young girl writing" />
                    <Card.Body>
                        <Card.Title>Primary & Secondary Education</Card.Title>
                        <Card.Text>
                            {/* {description} */}
                        </Card.Text>

                    </Card.Body>
                </Card>

                {/* 2nd item: Oruj Community college  */}
                <Card className="my-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={collegeEdu} role = "img"  alt = "image of women in a classroom"/>
                    <Card.Body>
                        <Card.Title>Oruj Community college </Card.Title>
                        <Card.Text>
                            {/* {description} */}
                        </Card.Text>

                    </Card.Body>
                </Card>

                {/* 3rd item: Oruj university */}
                <Card className="my-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={UniversityEdu} role = "img"  alt = "Image of a univerity gradution ceremony"/>
                    <Card.Body>
                        <Card.Title>Oruj university</Card.Title>
                        <Card.Text>
                            {/* {description} */}
                        </Card.Text>

                    </Card.Body>
                </Card>


            </div>


            <div className="explore-btn">
            <NavLink to="/WhatWeDo">
            <Button role = "button" href="/WhatWeDo" variant="primary">
                    Explore what we do
                </Button>
            </NavLink>
                
            </div>

            



        </div>










    );
}

export default Home;