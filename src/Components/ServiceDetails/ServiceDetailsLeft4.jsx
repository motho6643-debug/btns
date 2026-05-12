import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/home3/faq1.json';

const ServiceDetailsLeft4 = () => {

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

    return (
        <div className="service-details-area-all sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="sidebar-box-area mb-40">
                            <h3>Search by Keyword</h3>
                            <div className="search">
                                <input type="text" placeholder="Type keyword here" /> 

                                <div className="button">
                                    <button><i className="bi bi-search"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Our Services</h3>
                            <ul className="features-list">
                                <li><Link to="/service/service-details-dark2">Software and Development <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-dark6">Cloud Solutions<span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-dark3">Cybersecurity and Compliance<span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-dark4">DevOps, Automation and AI<span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-dark7">Graphic Design add Marketing<span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-dark">Design Strategy and Consulting<span><i className="bi bi-chevron-right"></i></span></Link></li>
                            </ul>
                        </div>

                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Tags</h3>
                            <ul className="tags">
                                <li><a href="#service-details-dark2">Software Development</a></li>
                                <li><a href="#service-details-dark6">Cloud Solutions</a></li>
                                <li><a href="#service-details-dark3">Cyber Security</a></li>
                                <li><a href="#service-details-dark4">DevOps, Automation and AI</a></li>
                                <li><a href="#service-details-dark7">Graphic Design add Marketing</a></li>
                                <li><a href="#service-details-dark">Design Strategy and Consulting</a></li>
                            </ul>
                        </div>

                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Download Brochure</h3>
                            <p>With a focus on excellence  &  commitment to exceeding expectations, our experienced team is here to empower Solution.</p>
                            <div className="download-btns">
                                <a className="daownload1" href="/service/btns profile.pdf">PDF Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
                            </div>
                        </div>

                        

                    </div>

                    <div className="col-lg-8 details-left-space">
                        <div className="service-details-post">
                            <article>
                                <div className="details-post-area">
                                    <div className="image">
                                        <img src="/assets/img/service/devops.png" alt="" />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>DevOps That Drives Delivery</h2>
                                        <div className="space16"></div>
                                        <p>We streamline development and deployment with CI/CD pipelines, containerization, and infrastructure-as-code. Whether your scaling a SaaS platform or launching a new feature, our DevOps approach ensures speed, stability, and zero guesswork.</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>Smart Automation for Smarter Workflows</h5>
                                                <div className="space16"></div>
                                                <p>We embed machine learning and predictive analytics into your platforms to unlock real-time intelligence. Whether its customer behavior, fraud detection, or operational forecasting, our AI solutions turn data into action.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>AI-Powered Insights & Decision Support</h5>
                                                <div className="space20"></div>
                                                <p>We build unified environments where DevOps meets AI—enabling adaptive deployments, intelligent testing, and dynamic scaling. It’s not just automation—it’s evolution, tailored to your business goals.We build unified environments where DevOps meets AI—enabling adaptive deployments, intelligent testing, and dynamic scaling. It’s not just automation—it’s evolution, tailored to your business goals.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                               <h5>Integrated DevOps & AI Ecosystems</h5>
                                                <div className="space20"></div>
                                                <p>We deploy observability tools that detect issues before they impact users—and trigger automated fixes. Your systems stay resilient, responsive, and ready for scale, even under pressure.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>=
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="">
                                  <div className="servcie2-box servcie2-box-2">
                                    <div className="icon">
                                      <img src="/assets/img/icons/service-page-icon1.png" alt="" />
                                    </div>
                                    <Link to="/serviceDark" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-details-details-center-dark">Consulting Service</Link></h4>
                                      <div className="space16"></div>
                                      <p>Strategic IT planning  roadmap development Business process analysis and improvement for It solution & technology.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="">
                                  <div className="servcie2-box servcie2-box-2">
                                    <div className="icon">
                                      <img src="/assets/img/icons/service-page-icon2.png" alt="" />
                                    </div>
                                    <Link to="/serviceDark" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-details-dark2">Software Development</Link></h4>
                                      <div className="space16"></div>
                                      <p>Mobile app development for iOS, Android, and cross-platform solutions & web <br/> application.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="space50"></div>

                            <div className="faq-area-all">
                                <div className="heading1">
                                    <h5>Frequently Asked Question</h5>
                                </div>
                                <div className="space20"></div>

                                <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">

                                {data.slice(0,4).map((item, index)=>(
                                    <div key={index} className={`accordion-item ${index === openItemIndex ? "active" : "" }`}>
                                      <h2 onClick={() => handleItemClick(index)} className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        {item.title}
                                        </button>
                                      </h2>
                                      <div ref={accordionContentRef} id="flush-collapseOne" className="accordion-collapse collapse accordion-content" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">{item.desc}</div>
                                      </div>
                                    </div>
                                    ))}

                                  </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsLeft4;