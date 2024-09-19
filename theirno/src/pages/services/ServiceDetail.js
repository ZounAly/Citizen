import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../includes/header';
import Footer from '../../includes/footer';
import Innerbanner from '../../components/Innerbanner';
import FaqsAccordion from '../../components/FuelFaqsAccordion';

const ServiceDetail = () => {
    const { title } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch service by title using the correct API endpoint
        fetch(`http://localhost:5000/api/services/title/${title}`)
            .then(response => response.json())
            .then(data => {
                setService(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching service:', error);
                setLoading(false);
            });
    }, [title]);

    if (loading) return <p>Loading...</p>;

    if (!service) return <p>Service not found.</p>;

    const midIndex = Math.ceil((service.features || []).length / 2);
    const featuresBeforeImage = (service.features || []).slice(0, midIndex);
    const featuresAfterImage = (service.features || []).slice(midIndex);

    return (
        <>
            <Header />
            <Innerbanner pageTitle={service.title} />
            <section className="service-inner" id="service-inner">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row inner-row align-items-center sec1">
                                <div className="col-md-6">
                                    {service.serviceImages[0] && (
                                        <img src={service.serviceImages[0].url} className="img-fluid" alt={service.title} />
                                    )}
                                </div>
                                <div className="col-md-6">
                                <form>
                                        <input type="text" class="form-control" placeholder="Full Name"/>
                                        <input type="email" class="form-control" placeholder="Email Address"/>
                                        <input type="tel" class="form-control" placeholder="Phone Number"/>
                                        <input type="text" class="form-control" placeholder="Location"/>
                                        <select class="form-control" id="servicetype">
                                            <option>House snow removing</option>
                                            <option>Car Snow Removing</option>
                                            <option>Road snow removing</option>
                                        </select>
                                        <h4>Charges: $0.00</h4>
                                        <input type="submit" class="btn btn-primary" value="Book Now"/>
                                    </form>
                                </div>
                            </div>
                            <div className="row inner-row sec2">
                                <div className="col-md-12">
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                            <div className="row inner-row align-items-center sec3">
                                <div className="col-md-4 text-right">
                                    <h3>Heading goes here</h3>
                                    <ul>
                                        {featuresBeforeImage.map((feature, index) => (
                                            <li key={index}>{feature.feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    {service.serviceImages[1] && (
                                        <img src={service.serviceImages[1].url} className="img-fluid" alt="Service" />
                                    )}
                                </div>
                                <div className="col-md-4">
                                    <h3>Heading goes here</h3>
                                    <ul>
                                        {featuresAfterImage.map((feature, index) => (
                                            <li key={index}>{feature.feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {service.faqs && <FaqsAccordion faqs={service.faqs} />}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ServiceDetail;
