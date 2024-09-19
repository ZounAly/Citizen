import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'jquery-ui/ui/widgets/datepicker'; // Import jQuery UI datepicker

const QueriesFilters = () => {
    useEffect(() => {
        // Initialize the datepicker once the component mounts
        $(function () {
            $("#datepicker").datepicker(); // Apply datepicker to the element
            const today = new Date(); // Get the current date
    const dateString = today.toDateString(); // Format the date to a string
    document.getElementById('dateElement').textContent = dateString; // Display the date
        });
    }, []); // Empty dependency array ensures this only runs once

    return (
        <div className="filters">
            <form className="filter-form d-flex justify-content-between">
                <div className="d-flex">
                    <input
                        type="text"
                        id="datepicker"
                        readOnly
                        placeholder="Filter by date"
                        className="form-control mr-3"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Filter</button>
            </form>
        </div>
    );
};

export default QueriesFilters;
