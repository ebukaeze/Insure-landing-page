import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
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
                </div>
            </div>
            
        </div>
    )
}

export default Footer
