import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="bg4">
      {/* <img src={require('../assets/images/bg-pattern-how-we-work-desktop.svg').default} alt="svg"/> */}

            </div>
            <div className="footer-container container">
                <div className="footer-content">
                   <div className="footer-header">
                       <div className="footer-logo">
                           <img src={require('../assets/images/logo.svg').default} alt="insure"/>
                           </div>
                           <div className="social-container">
                               <ul className="soc">
                                   <li className="soc-items"><img src={require('../assets/images/icon-facebook.svg').default } alt="fb"/></li>
                                   <li className="soc-items"><img src={require('../assets/images/icon-twitter.svg').default } alt="tw"/></li>
                                   <li className="soc-items"><img src={require('../assets/images/icon-pinterest.svg').default } alt="pin"/></li>
                                   <li className="soc-items"><img src={require('../assets/images/icon-instagram.svg').default } alt="ig"/></li>

                               </ul>
                           </div>
                       
                   </div>
                   <hr />

                   <div className="footer-links">
                       <ul>
                           <h3>OUR COMPANY</h3>
                           <li><Link to="#">How we work</Link></li>
                           <li><Link to="#">Why insure</Link></li>
                           <li><Link to="#">view plans</Link></li>
                           <li><Link to="#">reviews</Link></li>
                       </ul>
                       <ul>
                           <h3>Help me</h3>
                           <li><Link to="#">faq</Link></li>
                           <li><Link to="#">term of use</Link></li>
                           <li><Link to="#">Privacy Policies</Link></li>
                           <li><Link to="#">Cookies</Link></li>
                       </ul>
                       <ul>
                           <h3>Contact</h3>
                           <li><Link to="#">sales</Link></li>
                           <li><Link to="#">support</Link></li>
                           <li><Link to="#">live chat</Link></li>
                           
                       </ul>
                       <ul>
                           <h3>Others</h3>
                           <li><Link to="#">careers</Link></li>
                           <li><Link to="#">press</Link></li>
                           <li><Link to="#">license</Link></li>
                           
                       </ul>
                   </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
