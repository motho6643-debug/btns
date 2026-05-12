import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const goals = [
  "Increase efficiency / automation",
  "Improve customer experience",
  "Scale for growth",
  "Reduce costs",
  "Launch new product / feature",
  "Modernize legacy systems",
];

const challenges = [
  "Slow development cycles",
  "High operational costs",
  "Poor system reliability",
  "Lack of in-house expertise",
  "Security concerns",
];

const timelines = ["ASAP (within weeks)", "1–3 months", "3–6 months", "6+ months", "Still exploring / flexible"];
const preferences = ["Dedicated team augmentation", "End-to-end project delivery", "Consulting & strategy only", "Ongoing support & maintenance"];

const PlanProjectPage = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    primaryArea: "",
    primaryOther: "",
    selectedServices: [],
    goal: "",
    goalOther: "",
    challenges: [],
    challengeOther: "",
    timeline: "",
    preference: "",
    extra: "",
    // Contact details
    name: "",
    email: "",
    phone: "",
    company: "",
    submitted: false,
  });

  const handleSubmitQuestionnaire = async (e) => {
    e.preventDefault();

    // Prepare email content
    const emailContent = {
      to_email: 'info@btns.co.za,fidelkekana@gmail.com',
      from_name: answers.name,
      from_email: answers.email,
      subject: `New Project Inquiry from ${answers.name}`,
      message: `
New Project Planning Form Submission

CONTACT DETAILS:
Name: ${answers.name}
Email: ${answers.email}
Phone: ${answers.phone || 'Not provided'}
Company: ${answers.company || 'Not provided'}

PROJECT REQUIREMENTS:
Primary Area: ${answers.primaryArea || answers.primaryOther}
Specific Services: ${answers.selectedServices.join(", ") || "Not specified"}
Goal: ${answers.goal || answers.goalOther}
Challenges: ${answers.challenges.join(", ") || answers.challengeOther || "Not specified"}
Timeline: ${answers.timeline}
Working Style: ${answers.preference}
Additional Details: ${answers.extra || "None"}

---
This email was sent from the BTNS website project planning form.
      `.trim()
    };

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_btns_contact', // You'll need to set up this service in EmailJS
        'template_project_inquiry', // You'll need to create this template
        emailContent,
        'your_public_key' // You'll need to add your EmailJS public key
      );

      // Mark as submitted
      setAnswers((prev) => ({ ...prev, submitted: true }));
    } catch (error) {
      console.error('Email sending failed:', error);
      // Still mark as submitted even if email fails, or handle error appropriately
      setAnswers((prev) => ({ ...prev, submitted: true }));
    }
  };

  const goNext = () => setStep((prev) => Math.min(prev + 1, 7));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 0));
  const resetPlan = () => {
    setStep(0);
    setAnswers({
      primaryArea: "",
      primaryOther: "",
      selectedServices: [],
      goal: "",
      goalOther: "",
      challenges: [],
      challengeOther: "",
      timeline: "",
      preference: "",
      extra: "",
      // Contact details
      name: "",
      email: "",
      phone: "",
      company: "",
      submitted: false,
    });
  };

  const stepLabels = [
    "Primary Area",
    "Project Goals",
    "Challenges",
    "Timeline",
    "Working Style",
    "Extra Details",
    "Contact Details"
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
            <h4>When would you like to start this project?</h4>
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
            <h4>What type of working relationship are you looking for?</h4>
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
            <h4>Any additional details or requirements?</h4>
            <div className="other-wrap">
              <textarea
                placeholder="Tell us more about your project, specific requirements, budget, or any other details..."
                value={answers.extra}
                onChange={(e) => setAnswers((prev) => ({ ...prev, extra: e.target.value }))}
                rows="6"
              />
            </div>
          </div>
        );
      case 7:
        return (
          <div className="plan-step">
            <h4>Enter your contact details</h4>
            <div className="contact-form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  value={answers.name}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={answers.email}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@company.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={answers.phone}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="+27 XX XXX XXXX"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  value={answers.company}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, company: e.target.value }))}
                  placeholder="Your company name"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="plan-project-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="plan-project-header">
              <Link to="/" className="back-home">
                <i className="bi bi-arrow-left"></i> Back to Home
              </Link>
              <h1>Plan Your Project</h1>
              <p>Let&apos;s understand your needs and create the perfect solution for your business</p>
            </div>

            {!answers.submitted ? (
              <div className="plan-form-container">
                <div className="plan-progress">
                  <div className="progress-bar">
                    <div style={{ width: `${((step + 1) / 7) * 100}%` }}></div>
                  </div>
                  <div className="progress-steps">
                    {stepLabels.map((label, i) => (
                      <span key={label} className={step === i ? "active" : step > i ? "complete" : ""}>
                        {i + 1}
                      </span>
                    ))}
                  </div>
                  <div className="step-label">
                    Step {step + 1} of 7: {stepLabels[step]}
                  </div>
                </div>

                <form onSubmit={handleSubmitQuestionnaire} className="plan-form">
                  {renderStep()}
                  <div className="plan-buttons">
                    {step > 0 && <button type="button" className="prev-btn" onClick={goBack}>Back</button>}
                    {step < 7 && <button type="button" className="next-btn" onClick={goNext}>Next</button>}
                    {step === 7 && <button type="submit" className="submit-btn">Submit & Send Inquiry</button>}
                  </div>
                </form>
              </div>
            ) : (
              <div className="plan-summary">
                <h2>Your Planned Project Summary</h2>
                <div className="summary-content">
                  <div className="summary-item">
                    <strong>Primary Area:</strong> {answers.primaryArea || answers.primaryOther}
                  </div>
                  <div className="summary-item">
                    <strong>Specific Services:</strong> {answers.selectedServices.join(", ") || "Not specified"}
                  </div>
                  <div className="summary-item">
                    <strong>Goal:</strong> {answers.goal || answers.goalOther}
                  </div>
                  <div className="summary-item">
                    <strong>Challenges:</strong> {answers.challenges.join(", ") || answers.challengeOther || "Not specified"}
                  </div>
                  <div className="summary-item">
                    <strong>Timeline:</strong> {answers.timeline}
                  </div>
                  <div className="summary-item">
                    <strong>Working Style:</strong> {answers.preference}
                  </div>
                  <div className="summary-item">
                    <strong>Additional Details:</strong> {answers.extra || "None"}
                  </div>
                  <div className="summary-item">
                    <strong>Contact Name:</strong> {answers.name}
                  </div>
                  <div className="summary-item">
                    <strong>Contact Email:</strong> {answers.email}
                  </div>
                  <div className="summary-item">
                    <strong>Phone:</strong> {answers.phone || "Not provided"}
                  </div>
                  <div className="summary-item">
                    <strong>Company:</strong> {answers.company || "Not provided"}
                  </div>
                </div>
                <div className="summary-actions">
                  <button type="button" className="reset-btn" onClick={resetPlan}>Plan Another Project</button>
                  <Link to="/contact" className="contact-btn">Contact Us</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanProjectPage;