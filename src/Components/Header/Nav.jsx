import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link to="/">Home</Link>
        
      </li>

      <li className="menu-item-has-children">
        <Link to="/aboutdark" onClick={() => setMobileToggle(false)}>
        About Us  
        </Link>
      </li>        
      
      <li className="menu-item-has-children">
        <Link to="/serviceDark" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/serviceDark" onClick={() => setMobileToggle(false)}>
                Our Services
              </Link>
            </li>           
            <li>
              <Link to="/service/service-details-dark6" onClick={() => setMobileToggle(false)}>
                Cloud Solution
              </Link>
            </li>
            <li>
              <Link to="/service/service-details-dark2" onClick={() => setMobileToggle(false)}>
                Software & Web Development
              </Link>
            </li>
            <li>
              <Link to="/service/service-details-dark3" onClick={() => setMobileToggle(false)}>
                Cybersecurity & Compliance
              </Link>
            </li>
            <li>
              <Link to="/service/service-details-dark4" onClick={() => setMobileToggle(false)}>
               DevOps, Automation & AI
              </Link>
            </li>
            <li>
              <Link to="/service/service-details-dark7" onClick={() => setMobileToggle(false)}>
               Graphic Design & Marketing
              </Link>
            </li>
            <li>
              <Link to="/service/service-details-center-dark" onClick={() => setMobileToggle(false)}>
                          Digital Strategy & Consulting
              </Link>
            </li>                       
          </ul>
        </DropDown>

      </li>      
      
      <li className="menu-item-has-children">
        <Link to="/Pages/ContactPage">Contact</Link>
        
      </li>      
    </ul>
    
  );
}
