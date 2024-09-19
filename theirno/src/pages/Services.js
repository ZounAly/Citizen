import React from "react";
import Header from '../includes/header'
import Footer from '../includes/footer'
import Innerbanner from '../components/Innerbanner'
import ServicesSlider from '../components/ServicesSlider';

function Services(){
    return(
        <>
            <Header />
            <Innerbanner pageTitle="Services"/>
            <div class="ptop"></div>
            <ServicesSlider />
            <Footer />
        </>
    )
}

export default Services