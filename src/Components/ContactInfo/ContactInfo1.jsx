
const ContactInfo1 = () => {
    return (
        <div>
            <div className="space100"></div>
        <div className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-boxs">
                            <div className="heading1">
                                <h2>Contact Information</h2>
                                <div className="space16"></div>
                            </div>
                            <div className="contact-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/contact-page-icon1.png" alt="" />
                                </div>
                                <div className="heading">
                                    <h5>Contact Us</h5>
                                    <a href="tel:0645510575" className="text">064 551 0575</a>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/contact-page-icon2.png" alt="" />
                                </div>
                                <div className="heading">
                                    <h5>Send Us a Mail</h5>
                                    <a href="mailto:fidel@btns.co.za " className="text">info@btns.co.za </a>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/contact-page-icon3.png" alt="" />
                                </div>
                                <div className="heading">
                                    <h5>Office Location</h5>
                                    <a href="tel:0645510575" className="text">68 Protea bronkhorstspruit<br/> 1020 South Africa</a>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-form-details">
                            <p>Fill the form below – our innovation team will reach out via email or call (+27 64 551 05755) within 24h.</p>
                            <form action="mailto:fidelkekana@gmail.com,info@btns.co.za" method="post" enctype="text/plain">
                                <div className="single-input">
                                    <label>Full name *</label>
                                    <input type="text" name="Full Name" placeholder="Thandiwe Mokoena" required />
                                </div>
                                <div className="single-input">
                                    <label>Email address *</label>
                                    <input type="email" name="Email Address" placeholder="hello@company.co.za" required />
                                </div>
                                <div className="single-input">
                                    <label>Phone number (optional)</label>
                                    <input type="tel" name="Phone Number" placeholder="+27 XX XXX XXXX" />
                                </div>
                                <div className="single-input">
                                    <label>Company / organization</label>
                                    <input type="text" name="Company / Organization" placeholder="Your brand" />
                                </div>
                                <div className="single-input">
                                    <label>How can we help? (project idea, DevOps, AI, platform, etc.)</label>
                                    <textarea name="How can we help?" placeholder="Tell us about your goals, challenges, or vision..."></textarea>
                                </div>
                                <button className="theme-btn1" type="submit"><span>Submit consultation request</span></button>
                            </form>
                            <p>Your data is confidential. We'll reply from info@btns.co.za or call +27 64 551 05755.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="space100"></div>

        <div className="contact-map-page">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14367.222536774123!2d28.70897004072821!3d-25.80998562529229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeab28fdd6bea3d%3A0xdd9c7dd24714d6a3!2s68%20Protea%20Rd%2C%20Riamarpark%2C%20Bronkhorstspruit%2C%201020!5e0!3m2!1sen!2sza!4v1760692241597!5m2!1sen!2sza" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
          </div>

    </div>

    );
};

export default ContactInfo1;