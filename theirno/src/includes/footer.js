import React from "react"
import FLogo from '../images/footer-logo.png';

function Footer(){
   return(
      <>
         <section className="newsletter" id="newsletter">
            <div className="container">
               <div className="bg-overlay"></div>
               <div className="row align-items-center">
                  <div className="col-md-7">
                     <h2>Get started today for better future finance!</h2>
                  </div>
                  <div className="col-md-5">
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                     <form className="newsletter form-inline" method="POST">
                           <input type="email" className="form-control" name="your-email" placeholder="Enter Your Email Address"/>
                           <button type="submit" className="btn btn-primary" name="n_submit" >Get started</button>
                     </form>
                  </div>
               </div>
            </div>
         </section>
         <footer className="footer" id="footer">
            <div className="bg-overlay"></div>
            <div className="container">
               <div className="row footer-outer">
                  <div className="col-md-4">
                     <a href="/"><img src={FLogo}/></a>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className="col-md-2">
                     <h4>Company</h4>
                     <a href="/">Home</a>
                     <a href="/about">About us</a>
                     <a href="/services">Services</a>
                     <a href="/gallery">Gallery</a>
                     <a href="/calculator">Calculator</a>
                     <a href="/contact">Contact us</a>
                  </div>
                  <div className="col-md-3">
                     <h4>Address</h4>
                     <p>Suite 503 8195 Elisha Cove, Blicktown, WV 03657-9783</p>
                  </div>
                  <div className="col-md-3">
                     <h4>Inquiries</h4>
                     <a href="tel:7165267209">(716) 526 7209</a>
                     <div className="social">
                        <a href="#" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                     </div>
                  </div>
               </div>
               <div className="row footer-copyright">
                  <div className="col-md-12 text-center">
                     <p>© 2024 Citizen Helpers Services LLC. All rights reserved</p>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}

export default Footer