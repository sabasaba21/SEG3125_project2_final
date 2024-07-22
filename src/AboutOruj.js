import './Home.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import womenStudying from './assets/women_studying.png';

const AboutOruj = () => {
    return (

        <div>

            <div className="about-oruj-img">
                <img className="landing-page-img" role="img" src={womenStudying} alt="afghan girls in class"></img>
                <h1>About Oruj </h1>

            </div>

            <div className="about-oruj">
                <h2>Establishment Oruj Learning Center</h2>
                <p>
                    Oruj Learning Center (OLC), founded in 2002 by a group of four Afghan refugee women, has been at the forefront of addressing the educational challenges faced by girls and women in Afghanistan. Following 18 years as refugees in Pakistan during the Russian occupation of Afghanistan, the founders of Oruj took initiative by financing the education of 36 girls in the village of Godah, Wardak province.
                </p>
                <h3>Education Challenges in Afghanistan</h3>
                <p>
                    Despite progress, challenges persist in the Afghan education system. Under the Taliban regime, Afghan women were barred from attending school, and although more girls are now enrolled, dropout rates remain high, particularly in remote provinces. Afghanistan's literacy rates, while improving, still rank among the lowest globally. Moreover, social customs such as early marriage and childbearing continue to impede girls' education.
                </p>
                <h3>Addressing Educational Gaps</h3>
                <p>
                    Oruj focuses on areas where educational infrastructure is scarce, particularly in rural regions. The center has successfully operated schools in Wardak, Nangarhar, and Kabul provinces, emphasizing primary and secondary education for girls. Recognizing the critical shortage of qualified teachers, especially female educators, Oruj has also prioritized pedagogical training in rural areas.
                </p>
                <h3>Higher Education Initiative</h3>
                <p>
                    Since September 2009, Oruj has proudly established Afghanistan's first women's community college in Kabul, registered with the Ministry of Education. This institution provides leadership, management, and business administration training to women and girls who faced barriers to continuing education beyond high school. The success of this initiative has led Oruj to envision expanding the community college into Afghanistan's first four-year liberal arts college for women.
                </p>
                <h2>Vision and Mission</h2>
                <h3>Vision</h3>
                <p>
                    Oruj Learning Center envisions an Afghanistan where all individuals, regardless of gender, have equal access to educational, social, political, and economic opportunities. The center strives to foster a community that values and supports women's capabilities and contributions to Afghan society.
                </p>
                <h3>Mission</h3>
                <p>
                    Oruj Learning Center is a women-led nonprofit dedicated to providing equal educational opportunities for girls and women throughout Afghanistan. The center believes that education empowers women to participate fully and equally in society, rejecting all forms of gender-based discrimination. Oruj also recognizes the importance of educating boys, fostering mutual understanding and nurturing future leaders.
                </p>
            </div>




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

export default AboutOruj;