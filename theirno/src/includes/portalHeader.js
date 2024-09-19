import React from "react"
import Logo from '../images/logo.png';
import fa_email from '../images/fa-email.png';
import fa_call from '../images/fa-call.png';
import fa_time from '../images/fa-time.png';
import fa_search from '../images/fa-search.png';

function portalHeader(){
    return (
        <header className="header">
            <div className="header-outer">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row header-kachra">
                        <div className="col-md-3">
                            <div className="col-bg"></div>
                            <a className="navbar-brand" href="/"><img src={Logo}/></a>
                        </div>
                        <div className="col-md-9">
                            <div className="row secondary-header">
                                <div className="col-md-6">
                                    <p>Welcome To Citizen Helpers Services LLC</p>
                                </div>
                                <div className="col-md-6 text-right">
                                    <div className="social">
                                        <p>Follow Us:</p>
                                        <a href="#" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                        <a href="#" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row header-details">
                                <div className="col-md-10">
                                    <div className="eyetame">
                                        <img src={fa_email}/>
                                        <span>
                                        <h6>Make An Email</h6>
                                        <a href="mailto:info@citizen.com">info@citizen.com</a>
                                        </span>
                                    </div>
                                    <div className="eyetame">
                                        <img src={fa_call}/>
                                        <span>
                                        <h6>Call us 24/7</h6>
                                        <a href="tel:(716) 526 7209">(716) 526 7209</a>
                                        </span>
                                    </div>
                                    <div className="eyetame">
                                        <img src={fa_time}/>
                                        <span>
                                        <h6>Office Hours</h6>
                                        <h5>Mon-Sat 8am -6pm</h5>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <a href="javascript:"><img src={fa_search}/></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row header-menu">
                    <div className="col-md-10">
                        <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><div className="hamburger" id="hamburger-12"><span className="line"></span><span className="line"></span></div></button>
                            <ul className="navbar-nav mr-auto desktop">
                                <li className="nav-item"><a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                                <li className="nav-item has-submenu"><a className="nav-link" href="/services">Services</a>
                                    <ul className="subMenu">
                                        <li className="nav-item"><a className="nav-link" href="/services/snow-remover">Snow Remover</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/services/truck-cargo">Truck Cargo</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/services/fuel-services">Fuel Services</a></li>
                                    </ul></li>
                                <li className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></li>
                                <li className="nav-item"><a className="nav-link" href="/calculator">Calculator</a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                            </ul> 
                        </nav>
                    </div>
                    <div className="col-md-2">
                        <a className="nav-link" href="/login"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</a>
                    </div>
                </div>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Calculator</a></li>
                        <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                        <li className="nav-item btn btn-outline-primary"><a className="nav-link" href="#"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</a></li>
                    </ul> 
                </div>
            </div>
        </header>
    )
}

export default portalHeader