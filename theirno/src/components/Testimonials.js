import React, { useEffect } from 'react';
import Lenis from 'lenis'; // Import Lenis if used in this component
import Testi1 from '../images/testi1.png';
import Testi2 from '../images/testi2.png';
import Testi3 from '../images/testi3.png';

const Testimonials = () => {
    useEffect(() => {
        // Initialize Owl Carousel after the scripts are loaded
        if (window.$) {
            window.$('#testi .owl-carousel').owlCarousel({
                loop: false,
                margin: 10,
                nav: true,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    }
                }
            });
        }
    }, []);

    return (
        <section className="testi" id="testi">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>What Customer Says</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="col-md-12">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="testi-header">
                                    <img src={Testi1} className="img-fluid" alt="Testimonial 01" />
                                    <h4>Ricardo Yosef <span>CEO & Founder at Automive</span></h4>
                                </div>
                                <p>“Parallel task user friendly convergence through supply are chains. Dynamically simplify reliable meta service visionary sources. unleash tactical thinking via granular intellectual capital architect dynamic information value”</p>
                            </div>
                            <div className="item">
                                <div className="testi-header">
                                    <img src={Testi2} className="img-fluid" alt="Testimonial 02" />
                                    <h4>Ricardo Yosef <span>CEO & Founder at Automive</span></h4>
                                </div>
                                <p>“Parallel task user friendly convergence through supply are chains. Dynamically simplify reliable meta service visionary sources. unleash tactical thinking via granular intellectual capital architect dynamic information value”</p>
                            </div>
                            <div className="item">
                                <div className="testi-header">
                                    <img src={Testi3} className="img-fluid" alt="Testimonial 03" />
                                    <h4>Ricardo Yosef <span>CEO & Founder at Automive</span></h4>
                                </div>
                                <p>“Parallel task user friendly convergence through supply are chains. Dynamically simplify reliable meta service visionary sources. unleash tactical thinking via granular intellectual capital architect dynamic information value”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;