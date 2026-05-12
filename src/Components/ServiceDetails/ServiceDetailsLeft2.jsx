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
                                        <img src="/assets/img/service/web.png" alt="" />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>Mobile App Development</h2>
                                        <div className="space16"></div>
                                        <p>We design and develop intuitive mobile apps for iOS and Android that elevate user engagement and brand presence. Whether it’s a customer-facing app or an internal tool, our builds are sleek, scalable, and performance-optimized.</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>Desktop Software</h5>
                                                <div className="space16"></div>
                                                <p>From engineering tools to business management systems, we craft robust desktop applications tailored to your workflow. Our solutions are built for speed, reliability, and seamless integration with existing infrastructure.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>Web Development & UX Design</h5>
                                                <div className="space20"></div>
                                                <p>We create responsive, visually striking websites that deliver across all devices. With a focus on UX, speed, and SEO, our sites convert visitors into customers and reflect your brand with precision.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>API Integration & Workflow Automation</h5>
                                                <div className="space20"></div>
                                                <p>Streamline operations with custom API integrations and automated systems. We connect platforms, sync data, and eliminate bottlenecks—so your team can focus on what matters most.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>
                            <article>
                                <div className="details-post-area">
                                    <div className="heading1">
                                        <h5>E-Commerce & CMS Platforms</h5>
                                        <div className="space16"></div>
                                        <p>We build custom e-commerce platforms and CMS solutions for businesses of all sizes. Whether your selling online or offline, we have the tools to help you thrive in the digital world.</p>
                                        <div className="space20"></div>
                                        <ul className="expart-list">
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Frontend:</span> (HTML, CSS, JavaScript, React, Angular, Vue.js)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Backend:</span> (Node.js, Python, Ruby on Rails, PHP, .NET)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Database:</span> (MySQL, MongoDB, PostgreSQL, Oracle)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Mobile:</span> (iOS (Swift), Android (Java, Kotlin), React Native)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Cloud Platform:</span> (AWS, Azure, Google Cloud Platform)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Eco5278mmerce Platform:</span> (Shopify, BigCommerce, WooCommerce, Magento)</li>

                                        </ul>
                                </div>
                            </div>
                            </article>

                            <div className="space20"></div>

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