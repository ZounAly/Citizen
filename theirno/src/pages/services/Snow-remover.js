import React, { useState } from "react";
import Header from '../../includes/header'
import Footer from '../../includes/footer'
import Innerbanner from '../../components/Innerbanner'
import Fuel from '../../images/snow.jpeg'
import Service1 from '../../images/service1.png'
import FaArrow from '../../images/fa-arrow.png'
import SnowFaqsAccordion from "../../components/SnowFaqsAccordion";

function SnowRemover(){
    const [distance, setDistance] = useState(0);

    const handleDistanceChange = (e) => {
        setDistance(e.target.value);
    };
    return(
        <>
            <Header />
            <Innerbanner pageTitle="Snow Remover"/>
            <section className="service-inner" id="service-inner">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row inner-row align-items-center sec1">
                                <div className="col-md-6">
                                    <img src={Fuel} className="img-fluid"/>
                                </div>
                                <div className="col-md-6">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Full Name"/>
                                        <input type="email" className="form-control" placeholder="Email Address"/>
                                        <input type="tel" className="form-control" placeholder="Phone Number"/>
                                        <input type="text" className="form-control" placeholder="Location"/>
                                        <select className="form-control" id="servicetype">
                                        <option>House snow removing</option>
                                        <option>Car Snow Removing</option>
                                        <option>Road snow removing</option>
                                        </select>
                                        <h4>Charges: $0.00</h4>
                                        <input type="submit" value="Book Now" className="btn btn-primary"/>
                                    </form>
                                </div>
                            </div>
                            <div className="row inner-row sec2">
                                <div className="col-md-12">
                                    <h2>Snow Remover</h2>
                                    <p>This is just a placecholder content. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here.</p>
                                    <p>This is just a placecholder content. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here. Your content goes here.</p>
                                </div>
                            </div>
                            <div className="row inner-row align-items-center sec3">
                                <div className="col-md-4 text-right">
                                    <h3>Heading goes here</h3>
                                    <ul>
                                        <li>Your text goes here. Your text goes here.</li>
                                        <li>Your text goes here. Your text goes here.</li>
                                        <li>Your text goes here. Your text goes here.</li>
                                        <li>Your text goes here. Your text goes here.</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <img src={Service1} className="img-fluid"/>
                                </div>
                                <div className="col-md-4">
                                    <h3>Heading goes here</h3>
                                    <ul>
                                        <li>Your text goes here. Your text goes here.</li>
                                        <li>Your text goes here. Your text goes here.</li>
                                        <li>Your text goes here. Your text goes here.</li>
                                        <li>Your text goes here. Your text goes here.</li>
                                    </ul>
                                </div>
                            </div>
                            <SnowFaqsAccordion />
                            {/* <div className="row inner-row" id="choose">
                                <div className="col-md-12">
                                    <h2 className="text-center">FAQs</h2>
                                    <h3 className="text-center">Frequently Ask Questions</h3>
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SnowRemover