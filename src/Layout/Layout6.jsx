import { Outlet } from 'react-router-dom';
import HeaderStyle2 from '../Components/Header/HeaderStyle2';
import Footer2 from '../Components/Footer/Footer2';
import { useEffect } from 'react';

const Layout6 = () => {
    useEffect(() => {
        // Initialize floating WhatsApp button
        if (window.$ && window.$.fn.floatingWhatsApp) {
            window.$('#floating-whatsapp').floatingWhatsApp({
                phone: '27645510575',
                popupMessage: 'Hello! How can we help you today?',
                message: "Hi, I'm interested in your services",
                showPopup: true,
                showOnIE: false,
                headerTitle: 'Support',
                headerColor: '#25D366',
                backgroundColor: '#25D366',
                position: 'right'
            });
        }
    }, []);

    return (
        <div className='comon-body tg-heading-subheading animation-style3'>
            <HeaderStyle2></HeaderStyle2>
            <Outlet></Outlet>
            <Footer2></Footer2>
            <div id="floating-whatsapp"></div>
        </div>
    );
};

export default Layout6;