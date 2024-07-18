import React from 'react';


import logo from './assets/oruj_logo.jpeg';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
            <a className="logo" href="/SEG3125_project2_final">
                    <img src={logo} alt="Oruj Learning Center Logo" />
                    </a>
                </div>
            <div className="footer-content">
                
                <div className="footer-social">
                    <h4>Get Social with Us!</h4>
                    <ul className="social-icons">
                        <li><a href="https://www.facebook.com">Facebook</a></li>
                        <li><a href="https://www.twitter.com">Twitter</a></li>
                        <li><a href="https://www.youtube.com">YouTube</a></li>

                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Telephone: 0093-797-399-300</p>
                    <p>Email: <a href="mailto:info@orujlearningcenter.org">info@orujlearningcenter.org</a></p>
                    <p>Address: Across from Habibya High School,<br />
                    Sara-e-Ghazni, Kart-e-Char Main Street,<br />
                    Kabul, Afghanistan</p>

            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26302.6882329219!2d69.12227495372991!3d34.507041021268655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d168d7b00757f5%3A0x8f47487fa0bd2680!2sKart-e-Char%2C%20Kabul%2C%20Afghanistan!5e0!3m2!1sen!2sca!4v1720054877750!5m2!1sen!2sca" width="400" height="300" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                </div>

            </div>
        </footer>
    );
}

export default Footer;
