import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/Styling.css';
import About from "./About";

const Index = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/Login');
    }

    const handleSignupClick = () => {
        navigate('/signup');
    }

    const slides = [
        {
            id: 1,
            WelcomeText: 'Welcome to Agricultural E-extension System',
            heading1: 'Empowering Farmers Anywhere, Anytime',
            heading2: 'Innovative Agricultural Solutions',
            description1: 'Access farming resources and expert advice instantly.',
            description2: 'Stay updated with the latest agricultural trends.',
        },

        {
            id: 2,
            WelcomeText: 'Agricultural E-extension System',
            heading1: 'Why Choose Our Platform?',
            heading2: 'Features and Benefits',
            description1: 'Real-time updates and expert consultations.',
            description2: 'Secure and easy-to-use platform for farmers.',
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
    };

    return (
        <div id="root">
            <section className="banner_main">
                <Slider className="custom-slider" {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id} className={`carousel-item${slide.id}`}>
                            <div className="slide-content">
                                <div className="welcome">
                                    <h4>{slide.WelcomeText}</h4>
                                </div>
                                
                                <h2>{slide.heading1}</h2>
                                <h2>{slide.heading2}</h2>

                                <p>{slide.description1}</p>
                                <p>{slide.description2}</p>

                                <div className="gl-buttons">
                                    <Button className="g-button" variant="primary" onClick={handleSignupClick}>
                                        <span>Get Started</span>
                                    </Button>
                                    <Button className="l-button" variant="primary" onClick={handleLoginClick}>
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            <About/>
        </div>
    );
};

export default Index;
