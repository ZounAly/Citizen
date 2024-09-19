import React, { useEffect } from 'react';
import FaArrow from '../images/fa-arrow.png'; // Ensure the path to the image is correct
import $ from 'jquery'; // Import jQuery

const FaqsAccordion = () => {
    useEffect(() => {
        // Custom jQuery accordion functionality
        $('.accordion-button').click(function() {
            const target = $($(this).attr('data-bs-target'));

            // Remove custom class from all buttons and hide all content
            $('.accordion-button').removeClass('active-button');
            $('.accordion-collapse').removeClass('show');

            if (target.hasClass('show')) {
                // If target is already visible, just hide it and reset button class
                target.removeClass('show');
            } else {
                // Show the new target and apply custom class to the clicked button
                target.addClass('show');
                $(this).addClass('active-button');
            }
        });
    }, []);

    return (
        <section className="choose" id="choose">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">FAQs</h2>
                        <h3 className="text-center">Frequently Ask Questions</h3>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <span>01</span>
                                    <button className="accordion-button active-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <img src={FaArrow} className="img-fluid" alt="Arrow"/>
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
                                        <img src={FaArrow} className="img-fluid" alt="Arrow"/>
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
                                        <img src={FaArrow} className="img-fluid" alt="Arrow"/>
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
        </section>
    );
};

export default FaqsAccordion;
