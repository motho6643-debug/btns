import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/home3/faq1.json';

const ServiceDetailsLeft1 = () => {

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
                                        <img src="/assets/img/service/cyber.png" alt="" />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>Cybersecurity by Design</h2>
                                        <div className="space16"></div>
                                        <p>We embed security into every layer of your digital presence—from websites to SaaS platforms—ensuring your business is protected from day one. Our proactive approach helps prevent breaches, data leaks, and downtime, so you can focus on growth with peace of mind.</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>Compliance That Builds Trust</h5>
                                                <div className="space16"></div>
                                                <p>We align your digital operations with POPIA, GDPR, and other global standards to ensure legal and ethical data handling. Whether you're collecting customer info or managing internal systems, we help you stay compliant and credible.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>Threat Monitoring & Response</h5>
                                                <div className="space20"></div>
                                                <p>Real-time threat detection and rapid incident response keep your business one step ahead of cybercriminals. Our systems monitor vulnerabilities and alert you before issues escalate—because prevention is always better than cure.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>Secure Client Portals & CRM</h5>
                                                <div className="space20"></div>
                                                <p>We design secure, multi-tenant platforms that protect sensitive client data while enabling seamless access and collaboration. From encrypted logins to role-based permissions, your CRM and portals are built for both usability and security.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

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

export default ServiceDetailsLeft1;