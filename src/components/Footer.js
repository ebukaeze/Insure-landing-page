import React from 'react'

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
                                   <li className="soc-items"><img src={require('../assets/images/icon-facebook.svg').default } alt="icon"/></li>
                                   <li className="soc-items"><img src={require('../assets/images/icon-twitter.svg').default } alt="icon"/></li>
                                   <li className="soc-items"><img src={require('../assets/images/icon-pinterest.svg').default } alt="icon"/></li>
                                   <li className="soc-items"><img src={require('../assets/images/icon-instagram.svg').default } alt="icon"/></li>

                               </ul>
                           </div>
                       
                   </div>
                   <hr />

                   <div className="footer-links">
                       <ul>
                           <h3>OUR COMPANY</h3>
                           <li><a href="#">How we work</a></li>
                           <li><a href="#">Why insure</a></li>
                           <li><a href="#">view plans</a></li>
                           <li><a href="#">reviews</a></li>
                       </ul>
                       <ul>
                           <h3>Help me</h3>
                           <li><a href="#">faq</a></li>
                           <li><a href="#">term of use</a></li>
                           <li><a href="#">Privacy Policies</a></li>
                           <li><a href="#">Cookies</a></li>
                       </ul>
                       <ul>
                           <h3>Contact</h3>
                           <li><a href="#">sales</a></li>
                           <li><a href="#">support</a></li>
                           <li><a href="#">live chat</a></li>
                           
                       </ul>
                       <ul>
                           <h3>Others</h3>
                           <li><a href="#">careers</a></li>
                           <li><a href="#">press</a></li>
                           <li><a href="#">license</a></li>
                           
                       </ul>
                   </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
