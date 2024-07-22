// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const TakeAction = () => {
    return (
        <div className='take-action'>
            <h2 className = "page-title" styles='text-align: center'>Take Action: We Know You Can Make a Difference! </h2>
            <div className='services-list'>
                {/* 1st item: Make a gift */}
                <Card className="my-card" >
                    <Card.Img className="round-img" variant="top"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAAC2trZFRUX4+Pjs7Oxvb28zMzOfn5/Pz8+MjIx/f3/m5uYKCgrCwsL8/Pzf399VVVVLS0vDw8OUlJTY2Niqqqp1dXXS0tLr6+saGholJSU+Pj5hYWGcnJywsLBpaWmFhYVRUVEWFhYuLi5bW1swMDAnJyc4ODiDZm24AAAITUlEQVR4nO2d6XqqMBCGRZaCKKAFsa6otfX+r/DUHoEACdkD9pn3X2mA+cw2k4RkMhmMJN1fr6tzwpQ4yPeL3WXtarZJJa5nPbnRzd7cy8RpbMA2JWysmt2GkviEJLZfJBsDq0HWm/jUSLtwDNkoRWa1+OhJ/N5Ke38Bie6irdAmJ/5op7Vu5iwVZdkx2joSEx94Eo+EdddmyyJ1GlOexCPBueKMPuATx50C/WBp1mJeUpzNlhXIJx4JLt5m645L7BAS97RMwzOr7fSnaJvz3p/YKqKwP/FY2DWsRErhqpsW7VaiCSo4N202O0ll5P9uDcmlbr6k7X9Wf17H658eKyOfTX5dUC/ttEgtfHaBtQM33rYmb2bhZDK3iFbX+fv1vBJXV04GbeajclHS8kpdFFs1sZZTu+bV7WtzJnOyKk2clVcQIc0wqi7Qh+7t4/Xczu16OJn4+Ex06oa0ysLah5uaNJqL2sZdGcs6W2xNrEtvFUwgYeV4A2GkYdmWuVgXRyQTEd+n1I144Z/j7S0mRW1mWdSQ8hhV6eribHeujLmhQbv8Hw7/4/W6QL6VedPpRJIv5L7vEWdh09e0tr++Srdrn9yqK/vfv330LiSrR0kzxA8flxDV8980yOjT4zdwL4170r7Hj4D4s2HuNmsEur9RFFJGH31hc7TNKgY1nwVn1bQ4d9Fm8idTHbv+M5lkdiv50PYz4NyaNlvpB1J0i2hf/zFL8lbaGf35Y6A9OrG4W3j27QsjbGTmU7/L+oKTw0C+xjwtGnKQOD4LSuFjQA8gpFunhME88YRumxp2QxVU7Pi2FoYaB5/RTVPEUAM3oBAUvpDCe+71kWPmFH8pem/zapducIVnSsL2XHZJ3/z3gyooGVxhSEkYERTOKfeBQu2AwgpQSAIUagcUVoBCEqBQO6CwAhSSAIXaYVZIip7+jsLXz8Od3c8bQeG+/7Z6FmtwhdoBhaAQFJL4+/MWc7ppangbbIWNqWI64MLvI906ebaDzu53P1xSztewi8BIH1go5G3Yz9lAISgEhaAQFIJCUAgKQSEoBIWgEBSCQlAICkEhKASFoBAUgkJQCApBISgEhaAQFIJCUAgKQSEoBIWgEBSCQlAICkEhKASFoBAUgkKzkM43UMjQ512IbpHIztDbYW7oJspxHfz0oAB77ooybNpeUgaIg6k2ov7jsAAAAAAAAAAAADhwHPfDMRAmuklwSs9hnufhLJ1miaHINPEP/4+MWs507nCSnTx724pNP2+p/m1jMvR8JeuiaQuQyMOeiPpLMdWZlW7Rft9B/esC6gkPS5+2KZkgDvYkVrVRf3zqnJOCxZ5t1G9Asm5XiycKq0Z83OHfgWOXvysVGZDOpqHvY8cM9sDlXm4nVYfeJaR96h98q3lHYPe8g8wqTeSz0j33v0TJqV4SJ8jcz5I15Uhuup/IF5XGUXYCbENxkRFD5fdlBfr0d9AJ30W6rvYhZXi2cvoczKH1YngRZ3Gatw8pIyHVnM5JW3GKsPA29DeWxOzbv8kcGEzaLlaYG+vUCk/vRDsypAcdW8wxbSjX08Nj8ET1xZ4GgSznpiWcdb8QFOiyeaH8UIIeh7v3PfQ/kERAf7IovW2qQOck5tUo6QUJFOTXRp/02zsIHabH2hWJQRqAyMRWOgj0h46Yo80Mvnl3BVu2Pb9A7SsqdrhfFRvDs8B/qKWBDYG7xfTEEV+34I4tzsp0kGl3GIFEz8QbWrSPKNZDs/Wbt88M5oG3FmaEAR/FoL6yc5Z6FGcZ5R+NEQPJQ19uFRXnyLexbdWrYc73b6nn7PgExqIrC1ebiRMVHOW7HB9zJNcy0k7SaJGIOEwP7P/jaU4QsobLpWVynpPNOfxDOjmETh3xxVnK1Ow/y5bcglteb1TYo2jPHXysqS5fGbGK/6g/8QTnQGzcmdbhoFNY3Omht1KWDbz4S3NeP2YuFewWmCc67yHRDSuLl/Ae9UvuGSfZYBcfKsTZDJuTlZclOJJ+5Z8YVRDshoSppsRvl45rVaYFz8PgH+GOFQW73hRfN+anwi6nHhaXdf1LCPWFZ/6hc5XjTcsTIdp2k+l67a8z9DcQGak8CKxOyKgzO3zcj4xGZPzP/hSZ4NER7F5ZJrn5BW6Fxu4l5gX7rcnf+zss/r4+FZm7kvV7e7keCC3PgzPv0zyhL0n0B7s2fuVJxPtiW2xNiZlg955umlk593mHnL6EBnxNniFmrbw02myybBP4Of9ArC+21iGWGfsxSSi4rivR+4WZMm6i89cycZlB9sJrDyWCXYMsxGfnTY0YyjGTWEz1Co2MJ7XOyWA/IciKY1EKDmfkDelV/vg/7dODUhyl9U30ztFLEipak6psrZpibsq+MIgVR/Zq+Fb5OUMytJouC/7p+F7MHd7LyEz5pxPCa9a+dQTOhYaPNGKxtQ+Pts6JZipXnf642Hp2gxAacq46YydIL4oycycYw9M5cduyb5YlJ/ML8VUwJUeNB/zyDufjFqo681Mo4wVyT5NxEXMtxO1ZTe1GZ7GKudR9SjpPVdxRWgM3mC05M/PNwBHi7MEw05d+bnYsmL2lxdrICdusw/rsDn+crJm6WoFpMjHYxi95I9L5NOyv44W5/Z5YquJFqL2bB2fSR3W2ZAzPB31kUeJ7DXdz7AZqW209PIEzRaD0mEKyRpsf0VkIGXoXlO7VuMRJdMyXl1s41d0BYumrirmRFl075KqoOCgdDsIIKs2NeSWw090aNiwYDhfjayn5RHo8dL+k1L+Nh2FaM26rv1RCnzSqooQbM17QqjiA22GCapHpt6btV4bnuVjQ+xtuDJbbn3JjsHjW6qXdmH996pPhj48iJQAAAABJRU5ErkJggg=="
                    />
                    <Card.Body>
                        <Card.Title>Make a gift</Card.Title>
                        <Card.Text>
                            Your gift is needed more than ever. It will finance the education of girls and women whose only dream is to empower themselves through education and be the change for their families and communities.   To make your gift write us below about the program you want to support and indicate "making a gift" in the subject line. Our fiscal sponsors in the United States and Canada will provide you tax-deductible receipt/s. Thank you for making our students' dreams a reality!
                        </Card.Text>

                    </Card.Body>
                </Card>

                {/* 2nd item: Host a fundraiser */}
                <Card className="my-card" >
                    <Card.Img className="round-img" variant="top"
                        src="data:image/png;base64,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"
                    />
                    <Card.Body>
                        <Card.Title className='card-title'>Host a fundraiser</Card.Title>
                        <Card.Text>
                            Share your concern and support for girls and women's education and their human rights by hosting a community fundraiser at home, at school, at a community center or a local business. These events can include raising money through a birthday, anniversary, or other milestone events. Host a dinner at your house, walk-a-thon, bike ride, home party, or silent auction. We always welcome new ideas, so feel free to be creative. After all, it’s your event! Oruj will prepare a customized promotional toolkit for your event and set up a personal fundraising page for you on our website. What would you like to do write us below and write "hosting a fundraiser" in the subject line.
                        </Card.Text>



                    </Card.Body>
                </Card>

                {/* 3rd item: Teach English lessons */}
                <Card className="my-card" >
                    <Card.Img className="round-img" variant="top"
                        src="data:image/png;base64,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"
                    />
                    <Card.Body>
                        <Card.Title>Teach English lessons</Card.Title>
                        <Card.Text>
                            We aim that all Oruj students can speak English and use a computer and other related IT applications. We believe English language and access to a computer and thus the social platform has a transformative impact. If you have a teaching background and interested to teach one or a group of our students, write us and indicate "Teaching English" in the subject line below.
                        </Card.Text>


                    </Card.Body>
                </Card>


            </div>

            <div className='help-buttons'>

                <div className="contact-btn text-center" >
                    <div>For further information</div>


                    <NavLink to="/contact">
                        <Button href="contact" variant="primary" style={{ backgroundColor: ' #427FB5' }}>
                            Contact us
                        </Button>
                    </NavLink>

                </div>

                <div className="contact-btn text-center">
                    <div>To donate</div>
                    <NavLink to="/donate">
                        <Button href="donate" variant="primary" style={{ backgroundColor: ' #427FB5' }}>
                            Donate
                        </Button>
                    </NavLink>


                </div>


            </div>



        </div>

    );
}

export default TakeAction;