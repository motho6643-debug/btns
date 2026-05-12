import { Link } from "react-router-dom";

const Blog2 = () => {
    return (
        <div className="blog sp">
            <div className="container">
            <div className="row">
                <div className="ocl-lg-6 text-center m-auto">
                <div className="heading2">
                    <span className="span"><img src="/assets/img/icons/span2.png" alt="" /> Our Blog</span>
                    <h2 className="title tg-element-title">See Our Latest Blog & News</h2>
                </div>
                </div>
            </div>

            <div className="space30"></div>
            <div className="row">
                <div className="col-lg-6">
                <div className="blog2-box" data-aos="zoom-in-up" data-aos-duration="800">
                    <div className="image image-anime">
                    <img src="/assets/img/blog/blog2-img2.png" alt="" />
                    </div>
                    <div className="heading2">
                    <div className="tags">
                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> 04/02/2024</a>
                        <a href="#" className="date outhor"><img src="/assets/img/icons/user.png" alt="" /> Victor</a>
                    </div>
                    <h4><Link to="/blog/blog-details">From Legacy to Cloud: Why South African Enterprises Must Modernize Now</Link></h4>
                    <div className="space16"></div>
                    <p>As infrastructure ages and digital demands grow, South African businesses face a critical choice: evolve or fall behind. This blog explores the risks of legacy systems, the benefits of cloud migration (IaaS, PaaS, SaaS), and how BTNS helps companies transition smoothly—without disrupting operations. Real-world examples from mining, finance, and education sectors highlight the urgency and opportunity.</p>
                    <div className="space16"></div>
                    <Link to="/blog/blog-details" className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                    </div>
                </div>
                </div>

                <div className="col-lg-6">
                <div className="blog2-box" data-aos="zoom-in-up" data-aos-duration="1100">
                    <div className="image image-anime">
                    <img src="/assets/img/blog/blog2-img1.png" alt="" />
                    </div>
                    <div className="heading2">
                    <div className="tags">
                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> 07/10/2025</a>
                        <a href="#" className="date outhor"><img src="/assets/img/icons/user.png" alt="" /> Victor</a>
                    </div>
                    <h4><Link to="/blog/blog-details">AI-as-a-Service: The Smart Advantage for South African SMEs</Link></h4>
                    <div className="space16"></div>
                    <p>Artificial Intelligence isn’t just for tech giants. With AI-as-a-Service, small and medium enterprises in South Africa can now access predictive analytics, automation, and intelligent workflows—without heavy upfront investment. This post breaks down how BTNS deploys AI tools for real-time decision-making, customer engagement, and operational efficiency across industries.</p>
                    <div className="space16"></div>
                    <Link to="/blog/blog-details" className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Blog2;