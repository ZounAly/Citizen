import React from "react";
import Header from '../includes/header'
import Footer from '../includes/footer'
import Innerbanner from '../components/Innerbanner'

function Contact(){
    return(
        <>
            <Header />
            <Innerbanner pageTitle="Contact Us"/>
            <section className="contact-pg-sec" id="contact-pg-sec">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h2>Contact Us</h2>
                            <div className="contact-info">
                                <a href="javascript();">Suite 503 8195 Elisha Cove, Blicktown, WV 03657-9783</a>
                                <a href="tel:7165267209">(716) 526 7209</a>
                                <a href="mailto:info@citizen.com">info@citizen.com</a>
                            </div>
                            <div className="social-info">
                                <a href="#" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="#" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        
                        <div className="col-md-8">
                            <form method="">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="your-name" placeholder="John Doe (or is it?)"/>
                                </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <input type="email" className="form-control" name="your-email" placeholder="Email Address"/>
                                </div>
                                <div className="form-group col-md-6">
                                <input type="tel" className="form-control" name="your-phone" placeholder="Phone Number"/>
                                </div>
                            </div>
                            <div className="form-group">
                                    <textarea type="text" className="form-control" name="your-message" placeholder="Write a message"></textarea>
                                </div>
                            <button type="submit" className="btn btn-primary" name="c_submit">Send Message</button>
                                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact