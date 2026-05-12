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
                                <li><Link to="/service/service-details-dark2">Software Development <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-dark6">Cloud <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-dark3">Cybersecurity <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-dark">It Solution<span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-dark4">DevOps, Automation and AI<span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-dark7">Graphic Design add Marketing<span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details-dark">Design Strategy and Consulting<span><i className="bi bi-chevron-right"></i></span></Link></li>
                            </ul>
                        </div>

                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Tags</h3>
                            <ul className="tags">
                                <li><a href="/service/service-details-dark2">Software Development</a></li>
                                <li><a href="/service/service-details-dark6">Cloud </a></li>
                                <li><a href="/service/service-details-dark">It Solution</a></li>
                                <li><a href="/service/service-details-dark3">Cyber Security</a></li>
                                <li><a href="/service/service-details-dark4">DevOps, Automation and AI</a></li>
                                <li><a href="/service/service-details-dark7">Graphic Design add Marketing</a></li>
                                <li><a href="/service/service-details-dark">Design Strategy and Consulting</a></li>
                            
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
                                        <img src="/assets/img/service/service-details-img.png" alt="" />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>Cloud Solutions Services</h2>
                                        <div className="space16"></div>
                                        <p> BTNS delivers scalable, secure, and intelligent cloud services designed to future-proof your operations and accelerate digital transformation. Whether youre migrating legacy systems or building cloud-native applications, our solutions are built for performance, compliance, and resilience.</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>Cloud Infrastructure Design & Deployment</h5>
                                                <div className="space16"></div>
                                                <p>We architect robust cloud environments tailored to your business needs. From hybrid setups to full cloud-native stacks, our team ensures optimal performance, security, and scalability across AWS, Azure, GCP, and private clouds.*Custom architecture planning*VM and container orchestration (Kubernetes, Docker)*Network configuration and security hardening*Compliance-aligned infrastructure (ISO, POPIA, GDPR)*</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>Cloud Migration & Modernization</h5>
                                                <div className="space20"></div>
                                                <p>Seamlessly transition from legacy systems to modern cloud platforms with minimal disruption. We handle everything from data migration to application refactoring.Real-time server and service monitoring.Real-time server and service monitoring.Backup audits and patch management.On-demand troubleshooting and performance tuning.SLA-backed uptime guarantee (99.7%</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>24/7 Cloud Support & Monitoring</h5>
                                                <div className="space20"></div>
                                                <p>Our dedicated support team ensures your cloud infrastructure runs smoothly around the clock. With proactive monitoring and rapid incident response, we keep your systems secure, stable, and optimized.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>
                            <article>
                                <div className="details-post-area">
                                    <div className="heading1">
                                        <h5>Our Approach</h5>
                                        <div className="space16"></div>
                                        <p>At BTNS IT Solutions, our approach is rooted in client-centric collaboration, technical excellence, and continuous innovation. We begin by deeply understanding your business goals, operational context, and compliance requirements—especially in regulated sectors like mining and healthcare. From there, we co-create agile solutions through iterative development, ensuring transparency and adaptability at every stage. Our team applies best-in-class technologies across cloud, DevOps, and cybersecurity, embedding governance and resilience into every layer. Post-deployment, we provide ongoing support, optimization, and training to ensure your systems remain secure, scalable, and aligned with your evolving needs.</p>

                                        <div className="space20"></div>
                                        <ul className="expart-list">
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Frontend:</span> (HTML, CSS, JavaScript, React, Angular, Vue.js)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Backend:</span> (Node.js, Python, Ruby on Rails, PHP, .NET)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Database:</span> (MySQL, MongoDB, PostgreSQL, Oracle)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Mobile:</span> (iOS (Swift), Android (Java, Kotlin), React Native)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Cloud Platform:</span> (AWS, Azure, Google Cloud Platform)</li>
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
                                    <Link to="/service/service-details" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-details">Consulting Service</Link></h4>
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
                                    <Link to="/service/service-details" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-details">Software Development</Link></h4>
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