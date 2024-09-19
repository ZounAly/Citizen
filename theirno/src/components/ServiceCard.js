import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Service1 from '../images/service1.png';
import Service2 from '../images/service2.png';
import Service3 from '../images/service3.png';

const ServiceCard = () => {
    useEffect(() => {
        
    }, []);

    return (
        <div className="owl-carousel owl-theme">
            <div className="item text-center">
                <img src={Service1}/>
                <h5>Service 05</h5>
                <h4>Snow Remover</h4>
                <a href="/services/snow-remover" className="btn btn-primary">Learn More</a>
            </div>
            <div className="item text-center">
                <img src={Service1}/>
                <h5>Service 05</h5>
                <h4>Snow Remover</h4>
                <a href="/services/snow-remover" className="btn btn-primary">Learn More</a>
            </div>
            <div className="item text-center">
                <img src={Service1}/>
                <h5>Service 05</h5>
                <h4>Snow Remover</h4>
                <a href="/services/snow-remover" className="btn btn-primary">Learn More</a>
            </div>
        </div>
    );
};

export default ServiceCard;
