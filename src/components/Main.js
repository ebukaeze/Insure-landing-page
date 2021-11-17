import React from 'react'
import family from '../assets/images/image-intro-desktop.jpg';

const Main = () => {
    return (
        <div className="main bg">
            <div className="bg-mob-right"></div>
            <div className="main-container container">
              <div className="main-content grid">
                  <div className="intro">
                       <div className="line"></div>
                       <h1 className="intro-header">
                           Humanizing <br /> your insurance.
                       </h1>
                       <p className="desc">Get your life insurance coverage easier and faster. We blend our
                       expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected</p>
                       <button className="plan-btn">View Plans</button>
                      </div>
                      <div className="img-container">
                         <img src={family} alt="family" />
                          </div>
                  </div>

            </div>
            
        </div>
    )
}

export default Main
