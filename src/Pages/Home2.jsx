import About2 from "../Components/About/About2";
import Blog2 from "../Components/Blog/Blog2";
import Choose2 from "../Components/Choose/Choose2";
import Cta2 from "../Components/Cta/Cta2";
import HeroBanner2 from "../Components/HeroBanner/HeroBanner2";
import HowWork1 from "../Components/HowWork/HowWork1";
import Service2 from "../Components/Services/Service2";
import Testimonial2 from "../Components/Testimonial/Testimonial2";

const Home2 = () => {
    return (
        <div>
            <HeroBanner2
                subTitle="Architects of Digital Success | Innovation. Strategy. Impact."
                title="Where creativity meets cutting-edge technology."
                featureList={[
                    "Software Development",
                    "Cloud Solution",
                    "It Solution",
                    "Infrastructure Management",
                    "Graphic Design",
                    "Cyber Security",
                    "DevOps",
                ]}
                image1="/assets/img/shapes/hero2-shape1.png"
                image2="/assets/img/hero/btnsCloud.gif"
                image3="/assets/img/hero/hero2-main-img2.png"
            ></HeroBanner2>
            <About2
                image1="/assets/img/about/about2-img1.png"
                image2="/assets/img/about/about2-img2.png"
                image3="/assets/img/about/about2-img3.png"
                experienceNum="7"
                experienceTitle="Years Of <br> Experience"
                subTitle="Our Service"
                title="From Code to Cloud—We Engineer Your Success"
                content="At BTNS, we deliver a full spectrum of technology services designed to elevate your business in today’s fast-paced digital landscape. Whether you're building a new platform, optimizing infrastructure, or securing your data, our global team of experts is here to help."
                counName1="IT Consulting"
                CounNum1="100%"
                counName2="Programming"
                CounNum2="100%"
            ></About2>
            <Service2></Service2>
            <Choose2></Choose2>
            <HowWork1></HowWork1>
           
            <Testimonial2></Testimonial2>
            <Blog2></Blog2>
            <Cta2></Cta2>
        </div>
    );
};

export default Home2;