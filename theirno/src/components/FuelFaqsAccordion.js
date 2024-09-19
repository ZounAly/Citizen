import React, { useEffect } from 'react';
import FaArrow from '../images/fa-arrow.png'; // Ensure the path to the image is correct
import $ from 'jquery';

const FaqsAccordion = ({ faqs }) => {
    useEffect(() => {
        // Custom jQuery accordion functionality
        $('.accordion-button').click(function() {
            const target = $($(this).attr('data-bs-target'));

            $('.accordion-button').removeClass('active-button');
            $('.accordion-collapse').removeClass('show');

            if (target.hasClass('show')) {
                target.removeClass('show');
            } else {
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
                        <h3 className="text-center">Frequently Asked Questions</h3>
                        <div className="accordion" id="accordionExample">
                            {faqs.map((faq, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={`heading${index}`}>
                                        <span>{index + 1}</span>
                                        <button
                                            className={`accordion-button ${index === 0 ? 'active-button' : ''}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                            aria-expanded={index === 0}
                                            aria-controls={`collapse${index}`}
                                        >
                                            <img src={FaArrow} className="img-fluid" alt="Arrow" />
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${index}`}
                                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                        aria-labelledby={`heading${index}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <p><strong>{faq.question}</strong></p>  {/* Display the question in bold */}
                                            <p>{faq.answer}</p>  {/* Display the answer */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqsAccordion;
