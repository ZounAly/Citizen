import React from "react"
import BannerImg from '../images/banner.jpg'

function Innerbanner(props){
    return(
        <>
            <section className="inner-banner" id="inner-banner">
                <div className="bg-overlay">
                    <img src={BannerImg} className="img-fluid"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>{props.pageTitle}</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Innerbanner