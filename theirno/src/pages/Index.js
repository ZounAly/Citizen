import React from "react";
import Header from '../includes/header'
import Footer from '../includes/footer'
import BannerImage from '../images/banner.jpg'
import ArtSkid from '../images/art-skid.png'
import ArtSkid2 from '../images/art-skid2.png'
import AboutImg from '../images/about-img.png'
import Staff1 from '../images/staff1.jpg'
import Staff2 from '../images/staff2.jpg'
import Staff3 from '../images/staff3.jpg'
import Gallery from '../images/gallery.jpg'
import Testi1 from '../images/testi1.png'
import Testi2 from '../images/testi2.png'
import Testi3 from '../images/testi3.png'
import ServicesSlider from '../components/ServicesSlider';
import Accordion from '../components/Accordion';
import Testimonials from '../components/Testimonials';

function Index(){
    return(
        <>
            <Header />
            {/* Banner */}
            <section className="banner" id="banner">
                <div className="bg-overlay">
                    <img src={BannerImage} className="img-fluid"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Reliable And Efficient Truck And <span>Roadside Assistance Services</span></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="buttons">
                                <a href="/contact" className="btn btn-primary">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About */}
            <section className="about" id="about">
                <div className="bg-overlay">
                    <img src={ArtSkid} className="img-fluid"/>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={AboutImg} className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <h2>Who We Are</h2>
                            <h3>A little care for your great problems.</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services
            <section className="services" id="services">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h2>Our Services</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className="owl-carousel owl-theme">
                                <div className="item text-center">
                                    <img src={Service1} alt="Service 01"/>
                                    <h5>Service 01</h5>
                                    <h4>Snow Remover</h4>
                                    <a href="/services/snow-remover" className="btn btn-primary">Learn More</a>
                                </div>
                                <div className="item text-center">
                                    <img src={Service2} alt="Service 02"/>
                                    <h5>Service 02</h5>
                                    <h4>Truck Cargo</h4>
                                    <a href="/services/truck-cargo" className="btn btn-primary">Learn More</a>
                                </div>
                                <div className="item text-center">
                                    <img src={Service3} alt="Service 03"/>
                                    <h5>Service 03</h5>
                                    <h4>Fuel Services</h4>
                                    <a href="/services/fuel-services" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
             {/* Services */}
             <ServicesSlider />
            {/* Staff */}
            <section className="staff" id="staff">
                <div className="bg-overlay">
                    <img src={ArtSkid2} className="img-fluid"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h2>Our Staff</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={Staff1} className="img-fluid"/>
                            <div className="staff-details">
                                <h4>Aiden Samuel</h4>
                                <h5>Engine Expert</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={Staff2} className="img-fluid"/>
                            <div className="staff-details">
                                <h4>Joseph Carter</h4>
                                <h5>Engine Expert</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={Staff3} className="img-fluid"/>
                            <div className="staff-details">
                                <h4>Kevin Martin</h4>
                                <h5>Engine Expert</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Gallery */}
            <section className="gallery" id="gallery">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Photo Gallery</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <img src={Gallery} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact */}
            <section className="contact" id="contact">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2>Contact Us</h2>
                            <h3>Better yet, see us in person!</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="tel:7165267209">(716) 526 7209</a>
                            <h3>Citizens Helpers Services</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <h3>Hours Open</h3>
                            <p>Open Today <strong>08:00am - 06:00pm</strong></p>
                            <a href="/contact" className="btn btn-primary">Drop A Line</a>
                        </div>
                        <div className="col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195600.62651661836!2d-75.28283518651237!3d40.00264429448638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA%2C%20USA!5e0!3m2!1sen!2s!4v1724441381760!5m2!1sen!2s" width="100%" height=""  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            {/* Choose */}
            {/* <section className="choose" id="choose">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Why Choose Us</h2>
                            <h3>Discover the advantages of choosing Citizens Helpers Services</h3>
                            <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <span>01</span>
                                <button className="accordion-button active-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <img src={FaArrow} className="img-fluid"/>
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <span>02</span>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <img src={FaArrow} className="img-fluid"/>
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <span>03</span>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <img src={FaArrow} className="img-fluid"/>
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <Accordion />
            {/* testimonials
            <section className="testi" id="testi">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>What Customer Says</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="col-md-12">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="testi-header">
                                        <img src={Testi1} className="img-fluid"/>
                                        <h4>Ricardo Yosef <span>CEO & Founder at Automive</span></h4>
                                    </div>
                                    <p>“Parallel task user friendly convergence through supply are chains. Dynamically simplify reliable meta service visionary sources. unleash tactical thinking via granular intellectual capital architect dynamic information value”</p>
                                </div>
                                <div className="item">
                                    <div className="testi-header">
                                        <img src={Testi2}  className="img-fluid"/>
                                        <h4>Ricardo Yosef <span>CEO & Founder at Automive</span></h4>
                                    </div>
                                    <p>“Parallel task user friendly convergence through supply are chains. Dynamically simplify reliable meta service visionary sources. unleash tactical thinking via granular intellectual capital architect dynamic information value”</p>
                                </div>
                                <div className="item">
                                    <div className="testi-header">
                                        <img src={Testi3}  className="img-fluid"/>
                                        <h4>Ricardo Yosef <span>CEO & Founder at Automive</span></h4>
                                    </div>
                                    <p>“Parallel task user friendly convergence through supply are chains. Dynamically simplify reliable meta service visionary sources. unleash tactical thinking via granular intellectual capital architect dynamic information value”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <Testimonials />
            <Footer />
        </>
    )
}

export default Index