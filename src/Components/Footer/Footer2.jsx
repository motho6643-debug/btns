import { Link } from "react-router-dom";

const Footer2 = () => {
    return (
        <div className="footer2 _relative">
        <div className="container">
             <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                       <div className="single-footer-items footer-logo-area">
                            <div className="footer-logo">
                              <a href=""><img src="/assets/img/logo/header-logo2.png" alt="" /></a>
                            </div>
                            <div className="space20"></div>
                            <div className="heading2">
                              <p>BTNS IT Solutions – Powering Progress, Securely </p>
                            </div>
                            <ul className="social-icon">
                                <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                 <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                 <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                 <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                            </ul>
                       </div>
                  </div>

                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Service We Offer</h3>

                            <ul className="menu-list">
                                <li><Link to="/service/service-details-dark6">Cloud Computing Solution</Link></li>
                                 <li><Link to="/service/service-details-dark3">Cybersecurity & Compliance</Link></li>
                                 <li><Link to="/service/service-details-dark2">Software Development</Link></li>
                                 <li><Link to="/service/service-details-dark">It Consulting & Support</Link></li>
                            </ul>
                       </div>
                  </div>

                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items pl-5">
                            <h3>Useful Links</h3>

                            <ul className="menu-list">
                                 <li><Link to="/service/service-details-dark">Our Services</Link></li>
                            </ul>
                       </div>
                  </div>


                  <div className="col-lg-3 col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Contact Us</h3>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon1.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="tel:0645510575">064 551 0575</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon2.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="tel:0798428581">079 842 8581</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon3.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="mailto:fidel@btns.co.za">info@btns.co.za</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon4.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="mailto:fidel@btns.co.za">btns.co.za</a>
                              </div>
                            </div>

                       </div>
                  </div>

             </div>

             <div className="space70"></div>
        </div>

        <div className="copyright-area _relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                   <div className="coppyright">
                   <a href = "https://btns.co.za" >Copyright @2025 BTNS.All Rights Reserved</a>
                   </div>
              </div>
              <div className="col-md-7">
                   <div className="coppyright right-area">
                        <a href="https://btns.co.za/TC">Terms & Conditions</a>
                        <a href="https://btns.co.za/pr">Privacy Policy</a>
                   </div>
              </div>
         </div>
          </div>

          <a href="#" className="arrow-up"><i className="bi bi-arrow-up"></i></a>
     </div>

      </div>
    );
};

export default Footer2;