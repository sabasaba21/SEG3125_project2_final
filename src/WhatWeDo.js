import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar'; 



const data = [
    { name: 'Primary & Secondary Education', description: `
    The Oruj schools model is founded on a grassroots approach starting with each school, 
    first securing buy-in and agreement from the community and engaging local leaders in the process, 
    including religious leaders. The model also includes Oruj’s turning over each school to the Ministry of Education 
    when it is fully-functioning and academically sustainable. So far, Oruj has turned over two schools to the Directorate 
    of Education in Nangarhar.
    
    Oruj has established the following six girls primary schools:
    
    -  Noor Khel Primary: 464 girls attending first through ninth grades in Noor Khel village of Wardak province.
    - Godah Primary: 282 girls attending first through sixth grades in Godah village of Wardak province.
    - Bibi Khadija Primary: 617 girls attending first through sixth grades in Ali Hemat village of Wardak province.
    - Bibi Ayesha Primary: 622 girls attending first through sixth grades in Bahram Khail village of Wardak province.
    - Fatima Zahra Primary: 422 girls attending first through tenth grades in Jalalabad, Nangarhar province.
    - Trilli Primary: 1,063 girls attending first through seventh grades in Chaparhar, Nangarhar.
  ` },

    { name: 'Oruj Community College', description: `
    
    
    This first two-year community college for women in Afghanistan, OLMI (Oruj Leadership and Management Institute) 
    has been an opportunity for over 400 women who have high school degrees to build skills that will help them become 
    active advocates and effective employees working both in government and in non-government organizations. 
    During the 24-month program, the women learn skills in leadership, management, communications, advocacy and lobbying. 
    
    The women who are accepted into OLMI undergo a placement test and rigorous interview process. 
    In addition, they are required to submit an application, including a written essay, and must be recommended by 
    their teachers or individuals working in NGOs, government, advocacy and lobbying (depending on the circumstances).
    
` },

    { name: 'Oruj University', description: `
    
    To ensure that more women evolve into leadership roles and are included in the decision-making process
    in Afghanistan, especially now when the international community is committed to supporting Afghan women,
    they need access to four-year quality higher education. By transitioning the two-year community collegeto 
    a four-year liberal arts higher education institute, Oruj has created the path for women to enter the workforce
    in higher-level government positions so they can be heard and included in national and international forums.  
     
     
    In the fall of 2011, Oruj commenced the Institute by opening admissions into two faculties: 
    Faculty of Law and Faculty of Economics. These faculties were selected on the basis of 1) 
    a survey completed by women, in January 2011, and b) job market guided by online job search. 
    Oruj analyzed the most commonly used websites (www.acbar.org and www.jobs.af) to study the vacancies
    available for women in the job market. Both studies indicated that there is a huge demand for 
    female graduates of Law, Economics, and Journalism, respectively. 
     
    As of the academic year 2019, Oruj Institute of Higher Education is serving over 900 students
    in three different shifts, morning, afternoon, and evening classes. 
` },
    { name: 'Teacher Training', description: `
    Oruj conducted teacher training workshops for 174 teachers and principals of Oruj-run schools 
    as well as other government-funded schools in Wardak and Nangarhar provinces.

    As a result of the workshop, the drop-out rate for students decreased three times and new enrollment
    increased by approximately the same amount. Through its six primary schools, Oruj trained 1,423 students
    in 2007 and 2008, and today the number of students has increased to more than 3,600.
    ` },
    { name: 'Youth Capacity Building', description: `
    Since its establishment, Oruj has trained 1350 young women in comprehensive English language,
    computer operating (MS Office), Information Technology (both hardware and software), self-development, 
    and critical reading and writing skills. The six-month-long project conducted annually has enabled some of 
    our graduates to secure full-time jobs at schools, government offices, and NGOs. Most importantly, 
    70 percent of the graduates have passed the college entrance examination and have pursued higher education.` }
];

const categories = [
    {
        name: 'Education Programs',
        options: ['Primary & Secondary Education', 'Oruj Community College', 'Oruj University']
    },
    {
        name: 'Opportunities',
        options: ['Teacher Training', 'Youth Capacity Building']
    }
];




function WhatWeDo() {
    const allOptions = categories.flatMap(category => category.options);
    const [selectedOptions, setSelectedOptions] = useState(allOptions);

    const handleOptionChange = (option) => {
        setSelectedOptions(prevSelected => 
            prevSelected.includes(option) 
                ? prevSelected.filter(o => o !== option)
                : [...prevSelected, option]
        );
    };

    const renderItems = () => {
        const filteredData = data.filter(d => selectedOptions.includes(d.name));
        return (
            <div className='faceted-search'>
                {filteredData.map(item => (
                    <div className='faceted-search-item' key={item.name}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        
                    </div>
                ))}
            </div>
        );
    };


    return (
        <Container fluid ="true">
            <Row>
                <Col md={3}>
                    <Sidebar 
                        categories={categories} 
                        selectedOptions={selectedOptions} 
                        handleOptionChange={handleOptionChange}
                    />
                </Col>
                <Col md={9}>
                    <Row>
                        {renderItems()}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default WhatWeDo;