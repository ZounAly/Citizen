import React from "react";
import Header from '../includes/header'
import Footer from '../includes/footer'
import Innerbanner from '../components/Innerbanner'
import ArtSkid from '../images/art-skid.png'
import ArtSkid2 from '../images/art-skid2.png'
import AboutImg from '../images/about-img.png'
import Staff1 from '../images/staff1.jpg'
import Staff2 from '../images/staff2.jpg'
import Staff3 from '../images/staff3.jpg'

function About(){
    return(
        <>
            <Header />
            <Innerbanner pageTitle="About Us"/>
            {/* sec1 */}
            <section class="about" id="about">
                <div class="bg-overlay">
                    <img src={ArtSkid} className="img-fluid"/>
                </div>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img src={AboutImg} className="img-fluid"/>
                        </div>
                        <div class="col-md-6">
                            <h2>Who We Are</h2>
                            <h3>A little care for your great problems.</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="staff" id="staff">
                <div class="bg-overlay">
                    <img src={ArtSkid2} class="img-fluid"/>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-center">
                                <h2>Our Staff</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src={Staff1} class="img-fluid"/>
                            <div class="staff-details">
                                <h4>Aiden Samuel</h4>
                                <h5>Engine Expert</h5>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src={Staff2} class="img-fluid"/>
                            <div class="staff-details">
                                <h4>Joseph Carter</h4>
                                <h5>Engine Expert</h5>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src={Staff3} class="img-fluid"/>
                            <div class="staff-details">
                                <h4>Kevin Martin</h4>
                                <h5>Engine Expert</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About