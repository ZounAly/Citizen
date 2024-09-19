import React, { useState } from "react";
import Header from '../../includes/header'
import Footer from '../../includes/footer'
import Innerbanner from '../../components/Innerbanner'
import Fuel from '../../images/fuel.webp'
import Service1 from '../../images/service1.png'
import FuelFaqsAccordion from "../../components/FuelFaqsAccordion";

function FuelServices(){
    const [distance, setDistance] = useState(0);

    const handleDistanceChange = (e) => {
        setDistance(e.target.value);
    };
    return(
        <>
            <Header />
            <Innerbanner pageTitle="Fuel Services"/>
            <section className="service-inner service3 service2" id="service-inner">
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
                                        <select className="form-control" id="servicetype">
                                            <option>Service Type</option>
                                            <option>Residential Fuel Delivery</option>
                                            <option>Commercial Fuel Delivery</option>
                                            <option>Industrial Fuel Delivery</option>
                                        </select>
                                        <select className="form-control" id="servicetype">
                                            <option>Type of Fuel</option>
                                            <option>Gasoline</option>
                                            <option>Diesel</option>
                                            <option>Propane</option>
                                            <option>Heating Oil</option>
                                        </select>
                                        <div className="form-group">
                                            <label>Quantity (gallon)</label>
                                            <input type="range" className="form-range" id="distance" value={distance} min="1" max="100" onChange={handleDistanceChange}/>
                                            <output>{distance}</output>
                                        </div>
                                        <h4>Charges: $0.00</h4>
                                        <input type="submit" value="Book Now" className="btn btn-primary"/>
                                    </form>
                                </div>
                            </div>
                            <div className="row inner-row sec2">
                                <div className="col-md-12">
                                    <h2>Fuel Services</h2>
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
                            <FuelFaqsAccordion /> 
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default FuelServices