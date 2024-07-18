import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './FAQ.css'; // Import CSS file for styling

function FAQ() {
    return (
        <div>

            <h2>Frequently Asked Questions</h2>
            <h5>Welcome! Here you'll find answers to commonly asked questions about Oruj.</h5>
            <h5>If you have any additional questions or need further assistance, please don't hesitate to contact us.</h5>





            <Accordion defaultActiveKey="0" className='accordion-all' >



                <Accordion.Item className="accordion-item" eventKey="0">
                    <Accordion.Header className="accordion-header">When are you accepting new students?</Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        We accept new students at the beginning of each academic year. Please check our admissions page for specific dates and requirements. </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item className="accordion-item" eventKey="1">
                    <Accordion.Header className="accordion-header">Do you offer online studies?</Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        Yes, we offer online programs for select courses and degrees. Our online platform provides flexibility for students to study remotely.        </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item className="accordion-item" eventKey="2">
                    <Accordion.Header className="accordion-header">What faculties do you have?</Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        Our faculties include Arts and Humanities, Sciences, Business, Engineering, and Education. Each faculty offers a range of undergraduate and graduate programs.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item className="accordion-item" eventKey="3">
                    <Accordion.Header className="accordion-header">Do you offer online studies?</Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        Yes, we offer online programs for select courses and degrees. Our online platform provides flexibility for students to study remotely.        </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item className="accordion-item" eventKey="4">
                    <Accordion.Header className="accordion-header">Are you a women-only institution or coed?</Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        We are a women-only institution dedicated to empowering women through education.        </Accordion.Body>
                </Accordion.Item>

                

                <Accordion.Item className="accordion-item" eventKey="5">
                    <Accordion.Header className="accordion-header">Do you need volunteers? If so, what positions are available for them?</Accordion.Header>
                    <Accordion.Body className="accordion-body">
                    We welcome volunteers to support various initiatives such as mentoring, events, and community outreach. Positions vary based on current needs and projects.
       </Accordion.Body>
                </Accordion.Item>


            </Accordion>


            <div className="contact-btn text-center" >
                    <div>For further information</div>


                    <NavLink to="/contact">
                    <Button href="contact" variant="primary" style={{ backgroundColor: ' #427FB5' }}>
                        Contact us
                    </Button>
            </NavLink>
                    
                </div> 







        </div>
    );
}

export default FAQ;
