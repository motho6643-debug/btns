import Slider from "react-slick";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Clients = () => {
    const sliderRef = useRef(null);

    const next = () => {
      sliderRef.current.slickNext();
    };
  
    const previous = () => {
      sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };

    const stepLabels = [
      "Primary Area",
      "Project Goals",
      "Challenges",
      "Timeline",
      "Working Style",
      "Extra Details"
    ];

    const renderStep = () => {
      switch (step) {
        case 0:
          return (
            <div className="plan-step">
              <h4>What best describes your primary area of interest?</h4>
              <div className="card-grid">
                {["Web Development","AI Services","Mobile Apps","Infrastructure & DevOps","Digital Transformation","Legacy Modernization","Workflow Automation","Data-Driven Dashboards","CRM/ERP Integration","UI/UX Design","Ecommerce","QA and Test Automation","Microservices Architecture","Business Process Reengineering","MVP to Scale Builds","Agile & Dev Team Augmentation","Business Intelligence and Analytics","AI & Machine Learning","Intelligent Automation","AI Installation & Compute DataCenter Support","Cloud Setup","Cloud Migration","Managed Cloud Services","Server Management","Cost Optimization & Monitoring","Performance Optimization & Monitoring","Outsourced Support Services","CI/CD Setup & Pipeline Automation","Kubernetes & Docker Management","Infrastructure as Code (IaC)","Cloud-Native Migration","DevSecOps"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`option-card ${answers.primaryArea === item ? "active" : ""}`}
                    onClick={() => setAnswers((prev) => ({ ...prev, primaryArea: item, selectedServices: [...new Set([...prev.selectedServices, item])] }))}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="other-wrap">
                <input
                  type="text"
                  placeholder="Other (Please specify)"
                  value={answers.primaryOther}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, primaryOther: e.target.value }))}
                />
              </div>
            </div>
          );
        case 1:
          return (
            <div className="plan-step">
              <h4>What are you hoping to achieve with this project?</h4>
              <div className="card-grid">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    className={`option-card ${answers.goal === goal ? "active" : ""}`}
                    onClick={() => setAnswers((prev) => ({ ...prev, goal }))}
                  >
                    {goal}
                  </button>
                ))}
              </div>
              <div className="other-wrap">
                <input
                  type="text"
                  placeholder="Other (Please specify)"
                  value={answers.goalOther}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, goalOther: e.target.value }))}
                />
              </div>
            </div>
          );
        case 2:
          return (
            <div className="plan-step">
              <h4>What challenges are you currently facing?</h4>
              <div className="card-grid">
                {challenges.map((challenge) => (
                  <button
                    key={challenge}
                    type="button"
                    className={`option-card ${answers.challenges.includes(challenge) ? "active" : ""}`}
                    onClick={() => setAnswers((prev) => {
                      const has = prev.challenges.includes(challenge);
                      return { ...prev, challenges: has ? prev.challenges.filter((c) => c !== challenge) : [...prev.challenges, challenge] };
                    })}
                  >
                    {challenge}
                  </button>
                ))}
              </div>
              <div className="other-wrap">
                <input
                  type="text"
                  placeholder="Other (Please specify)"
                  value={answers.challengeOther}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, challengeOther: e.target.value }))}
                />
              </div>
            </div>
          );
        case 3:
          return (
            <div className="plan-step">
              <h4>What is your desired timeline?</h4>
              <div className="card-grid">
                {timelines.map((timeline) => (
                  <button
                    key={timeline}
                    type="button"
                    className={`option-card ${answers.timeline === timeline ? "active" : ""}`}
                    onClick={() => setAnswers((prev) => ({ ...prev, timeline }))}
                  >
                    {timeline}
                  </button>
                ))}
              </div>
            </div>
          );
        case 4:
          return (
            <div className="plan-step">
              <h4>How do you prefer to work?</h4>
              <div className="card-grid">
                {preferences.map((preference) => (
                  <button
                    key={preference}
                    type="button"
                    className={`option-card ${answers.preference === preference ? "active" : ""}`}
                    onClick={() => setAnswers((prev) => ({ ...prev, preference }))}
                  >
                    {preference}
                  </button>
                ))}
              </div>
            </div>
          );
        case 5:
          return (
            <div className="plan-step">
              <h4>Any additional details or specific goals you’d like to share?</h4>
              <textarea
                value={answers.extra}
                onChange={(e) => setAnswers((prev) => ({ ...prev, extra: e.target.value }))}
                placeholder="Describe your project in your own words..."
              />
            </div>
          );
        default:
          return null;
      }
    };

    const clients = [
        {
            id: 1,
            name: "Clobec Holdings",
            industry: "Mining & Energy",
            image: "/assets/img/clients/clobec-holdings.png",
            color: "#667eea"
        },
        {
            id: 2,
            name: "Cipher Ventures",
            industry: "Legal Services",
            image: "/assets/img/clients/cipher-ventures.png",
            color: "#f093fb"
        },
        {
            id: 3,
            name: "PhepanaP",
            industry: "Information Technology & Construction",
            image: "/assets/img/clients/phepanap.png",
            color: "#4facfe"
        },
        {
            id: 4,
            name: "ECONO-ROOFS",
            industry: "Roof Manufacture",
            image: "/assets/img/clients/econo-roofs.webp",
            color: "#43e97b"
        },
        {
            id: 5,
            name: "Reakgona",
            industry: "Mining & Energy",
            image: "/assets/img/clients/reakgona.png",
            color: "#fa709a"
        },
        {
            id: 6,
            name: "Labohlano",
            industry: "Mining  & Energy",
            image: "/assets/img/clients/Labohlano.png",
            color: "#30cfd0"
        },

    ];

    return (
        <div className="clients-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading1">
                            <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                                <img src="/assets/img/icons/span2.png" alt="" /> Client Success Stories
                            </span>
                            <h2 className="title tg-element-title">Our Trusted Clients</h2>
                            <div className="space16"></div>
                            <p data-aos="fade-right" data-aos-duration="700">
                                We've partnered with leading companies across diverse industries to deliver innovative IT solutions and drive digital transformation.
                            </p>
                        </div>
                        <div className="space40"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="clients-slider-area">
                            <div className="clients-slider">
                                <Slider ref={sliderRef} {...settings}>
                                    {clients.map((client, index) => (
                                        <div 
                                            key={client.id} 
                                            className="client-card" 
                                            data-aos="fade-up" 
                                            data-aos-duration={`${700 + index * 100}`}
                                        >
                                            <div className="card-inner">
                                                <div className="card-front">
                                                    <div className="card-image-wrapper">
                                                        <img src={client.image} alt={`${client.name} logo`} className="client-image" />
                                                    </div>
                                                </div>
                                                <div className="card-back">
                                                    <div className="card-content">
                                                        <h3 className="client-name">{client.name}</h3>
                                                        <p className="client-industry">{client.industry}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <div className="clients-arrows">
                                <button onClick={previous} className="clients-prev-arrow"><i className="bi bi-arrow-left"></i></button>
                                <button onClick={next} className="clients-next-arrow"><i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="space40"></div>
                        <div id="plan" className="clients-cta" data-aos="fade-up" data-aos-duration="800">
                            <h3>Become part of our growing network of successful clients</h3>
                            <Link to="/plan-project" className="plan-btn">
                                Plan Your Project
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Clients;
