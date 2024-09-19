import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

const TableGrid = () => {
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
        <table id="service-table" className="table display"></table>
    );
};

export default TableGrid;
