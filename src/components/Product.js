import React from 'react'

const Product = () => {
    return (
        <div className="product bg2">
            
            <div className="product-container container">
                <div className="line"></div>
             <div className="product-content">
                 <h1 className="title"> We're different </h1>
                 <div className="product-grid">
                     <div className="product-1">
                         <div className="product-icon"><img src={require('../assets/images/icon-snappy-process.svg').default} alt="bolt"/></div>
                         <h3>Snappy Process</h3>
                         <p>Our application process can be completed in minutes, not hours. Don't get stock filling in tedious forms.</p>
                         
                     </div>
                     <div className="product-1">
                         <div className="product-icon"><img src={require('../assets/images/icon-affordable-prices.svg').default} alt="bolt"/></div>
                         <h3>Affordable Prices</h3>
                         <p>Our application process can be completed in minutes, not hours.Don't get stock filling in tedious forms.</p>
                         
                     </div>
                     <div className="product-1">
                        <div className="product-icon"><img src={require('../assets/images/icon-people-first.svg').default} alt="bolt"/></div>
                         <h3>People First</h3>
                         <p>Our application process can be completed in minutes, not hours.Don't get stock filling in tedious forms.</p>
                         
                     </div>
                 </div>

                 <div className="product-extra">
                     <div className="bg3">
                         <img src={require('../assets/images/bg-pattern-how-we-work-desktop.svg').default} alt="svg"/>
                     </div>
                     <div className="extra">
                         <h1>Find out more<br/> about how we work</h1>
                         <button className="plan-btn">How we work</button>
                     </div>
                 </div>
             </div>
            </div>
            
        </div>
    )
}

export default Product
