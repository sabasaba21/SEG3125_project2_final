
import React from 'react';
import './Home.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { FaSchool, FaGraduationCap, FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaBriefcase } from 'react-icons/fa';

import afghanGirls from './assets/landing_page_img.webp';
import primaryEdu from './assets/primary_edu_img.webp';
import collegeEdu from './assets/college_img.webp';
import UniversityEdu from './assets/university_img.webp';
import WhatWeDo from './WhatWeDo';

const HomeDA = () => {
    return (
        <div className="home-da">
            {/* langing page*/}
            <div className="home">
                <img className="landing-page-img" src={afghanGirls} alt="afghan girls in class"></img>
                <h2 className='text-on-img1' >سرمایه گذاری در زنان و دختران افغانستان</h2>
                <h2 className='text-on-img2' > اطمینان از توسعه در افغانستان</h2>
            </div>

            {/* Display Data */}
            <div className="achievements-container">
                <h2>دستاوردهای آموزشی و توانمندسازی</h2>
                <div className="achievements-columns">
                    <div className="achievement-column">
                        <div className="achievement">
                            <p > <strong>6 مدرسه ابتدایی دخترانه</strong> که بیش از 3,600 دانش‌آموز خدمت می‌دهند</p>
                            <FaSchool className="icon" /> 
                        </div>
                        <div className="achievement">
                           
                            <p>آموزش دادن بیش از <strong>400 زن</strong> با دارا بودن مدرک دیپلم برای دفاع از حقوق و کار</p>
                            <FaUserGraduate className="icon" />
                        </div>
                        <div className="achievement">
                            
                            <p>مؤسسه تحصیلات عالی اروج که بیش از <strong>900 دانشجو</strong> را در شیفت صبح، عصر و شب خدمت می‌دهد</p>
                            <FaGraduationCap className="icon" />
                        </div>
                    </div>
                    <div className="achievement-column">
                        <div className="achievement">
                            
                            <p>برگزار کردن کارگاه‌های <strong>آموزش معلمان</strong> برای <strong>174 معلم</strong></p>
                            <FaChalkboardTeacher className="icon" />
                        </div>
                        <div className="achievement">
                           
                            <p><strong>70%</strong> از فارغ‌التحصیلان <strong>موفق شدند</strong> در آزمون ورودی دانشگاهی و به تحصیلات عالی پیوستند</p>
                            <FaBookOpen className="icon" />
                        </div>
                        <div className="achievement">
                            
                            <p><strong>482</strong> زن و دختر در حال تحصیل در <strong>رشته‌های مدیریت، رهبری و اداره کسب و کار</strong></p>
                            <FaBriefcase className="icon" />
                        </div>
                    </div>
                </div>
            </div>

            {/* What We Do */}
            <div className='services-list'>
                {/* 1st item: Primary Education */}
                <Card className="my-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={primaryEdu} />
                    <Card.Body>
                        <Card.Title>آموزش ابتدایی و متوسط</Card.Title>
                    </Card.Body>
                </Card>

                {/* 2nd item: Secondary Education */}
                <Card className="my-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={collegeEdu} />
                    <Card.Body>
                        <Card.Title>آموزش ابتدایی و متوسط</Card.Title>
                    </Card.Body>
                </Card>

                {/* 3rd item: Oruj University */}
                <Card className="my-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={UniversityEdu} />
                    <Card.Body>
                        <Card.Title>دانشگاه اروج</Card.Title>
                    </Card.Body>
                </Card>
            </div>

            {/* Explore button */}
            <div className="explore-btn">
                <NavLink to="/WhatWeDo">
                    <Button href="/WhatWeDo" variant="primary" style={{ backgroundColor: ' #427FB5' }} >
                        کشف آنچه ما انجام می‌دهیم
                    </Button>
                </NavLink>


                <NavLink to="/TakeAction">
                <Button role = "button" href="/TakeAction" variant="primary" style={{ backgroundColor: ' #427FB5' }} >
                اقدام کنید
                </Button>
            </NavLink>
            </div>
        </div>
    );
}

export default HomeDA;
