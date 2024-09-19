import React from "react";
import Header from '../includes/header'
import Footer from '../includes/footer'
import Innerbanner from '../components/Innerbanner'
import Galleria from '../images/gallery.jpg'

function Gallery(){
    return(
        <>
            <Header />
            <Innerbanner pageTitle="Gallery"/>
            {/* Gallery */}
            <section className="gallery" id="gallery">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Photo Gallery</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <img src={Galleria} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Gallery