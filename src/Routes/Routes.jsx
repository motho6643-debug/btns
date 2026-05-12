import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";

import ContactPage from "../Pages/ContactPage";
import PlanProjectPage from "../Pages/PlanProjectPage";

import Layout6 from "../Layout/Layout6";
import AboutDark from "../Pages/AboutDark";
import ProjectDetailsLeftDark from "../Pages/ProjectDetailsLeftDark";
import ProjectPageDark from "../Pages/ProjectPageDark";
import ServicePageDark from "../Pages/ServicePageDark";
import ServiceDetailsLeftDark from "../Pages/ServiceDetailsLeftDark";
import ServiceDetailsLeftDark1 from "../Pages/ServiceDetailsLeftDark1";
import ServiceDetailsLeftDark2 from "../Pages/ServiceDetailsLeftDark2";
import ServiceDetailsLeftDark3 from "../Pages/ServiceDetailsLeftDark3";
import ServiceDetailsLeftDark4 from "../Pages/ServiceDetailsLeftDark4";
import ServiceDetailsLeftDark6 from "../Pages/ServiceDetailsLeftDark6";
import ServiceDetailsLeftDark7 from "../Pages/ServiceDetailsLeftDark7";
import ServiceDetailsCenterDark from "../Pages/ServiceDetailsCenterDark";
import BlogPageDark from "../Pages/BlogPageDark";
import BlogDetailsLeftDark from "../Pages/BlogDetailsLeftDark";


export const router = createBrowserRouter([
   
    {
      path: '/',
      element: <Layout2></Layout2>,
      children: [
        {
          index: true,
          element: <Home2></Home2>,
        },
        {
          path: '/plan-project',
          element: <PlanProjectPage></PlanProjectPage>,
        },
      ],
    },  
    
    
  
    {
      element:<Layout6></Layout6>,
      children: [
        {
          path: '/aboutdark',
          element: <AboutDark></AboutDark>,
        }, 
        {
          path: '/projectDark',
          element: <ProjectPageDark></ProjectPageDark>,
        },        
        {
          path: "/project/project-details-dark",
          element:<ProjectDetailsLeftDark></ProjectDetailsLeftDark> ,
        },   
       
        {
          path: '/serviceDark',
          element: <ServicePageDark></ServicePageDark>,
        }, 
        {
          path: '/service/service-details-dark',
          element: <ServiceDetailsLeftDark></ServiceDetailsLeftDark>,
        },
        {
          path: '/service/service-details-dark7',
          element: <ServiceDetailsLeftDark7></ServiceDetailsLeftDark7>,
        },
        {
          path: '/service/service-details-dark6',
          element: <ServiceDetailsLeftDark6></ServiceDetailsLeftDark6>,
        },
        {
          path: '/service/service-details-dark4',
          element: <ServiceDetailsLeftDark4></ServiceDetailsLeftDark4>,
        },
        {
          path: '/service/service-details-dark3',
          element: <ServiceDetailsLeftDark3></ServiceDetailsLeftDark3>,
        },
        {
          path: '/service/service-details-dark2',
          element: <ServiceDetailsLeftDark2></ServiceDetailsLeftDark2>,
        },
        {
          path: '/service/service-details-dark1',
          element: <ServiceDetailsLeftDark1></ServiceDetailsLeftDark1>,
        },
        
        {
          path: '/service/service-details-center-dark',
          element: <ServiceDetailsCenterDark></ServiceDetailsCenterDark>,
        }, 
        {
          path: '/blogdark',
          element: <BlogPageDark></BlogPageDark>,
        }, 
        {
          path: "/blog/blog-details-dark",
          element:<BlogDetailsLeftDark></BlogDetailsLeftDark>,
        },
          
        {
          path: "/Pages/ContactPage",
          element:<ContactPage></ContactPage>,
        },                                                                                            
      ],
    },                   
  ]);