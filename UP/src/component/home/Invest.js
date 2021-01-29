import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const ruler=[1,2,3,4,5,6]

export default class Invest extends Component{
    render(){
        return(       
           
            // <!-- Investment plans -->
            <div className="col-sm-8 secondContent" id="Investment">
               <div className="general-Header col-12 d-flex">
      
                  <div className="col-6 headerText">
                    <h4>STEP 2 OF 3</h4>
                  </div>
      
                    <div className="col-6 headerText">
                      <h5>Lost or have trouble? 
                        <span><a href="#"> Get Help ➝</a></span>
                      </h5>
                  </div>
               </div>
                
             
               <div className="col-12  contactHeadText">
                 <h1>Investment plans</h1>
                 <p>Let us know about your investment 
                 plans. This will help us get you to the
                  right expert who will help you further</p>
               </div>
      
          
               <div className="col-12 investCenterText">
                 <h3>Ho much are you planning to invest in this year?</h3>
               </div>
      
                <div className="col-12 row d-flex ContactForm">
              
              <div className="md-form col-sm-4 filter__label">
                  <input type="text" id="InvestFrom" className="form-control filter__input" />
                  <label htmlFor="InvestFrom" id="fromLabel">From</label>
              </div>
              
              <div className="md-form col-sm-4 filter__label">
                  <input type="text" id="InvestTo" className="form-control filter__input" />
                  <label htmlFor="InvestTo" id="toLabel">To</label>
              </div>
      
      
                 
                </div>
      
                <div className="col-lg-8  col-md-8 col-sm-12 investScala" >
                <div id="sliderPrice" className="filter__slider-price" data-min="0" data-max="100000" data-step="1000"></div>
              <div className='ruler'>
              {ruler.map((id)=>
               <div key={id} className='cm'> </div>
              )}
                  
                  </div>
                </div>
                
                <div className="col-12 investCenterText">
                 <h3>Are you an accredited investor?</h3>
              
                  <fieldset className="mt-3 d-flex radio-item">
                    <label className="YesNo">
                      <input type="radio" name="radio-button" defaultValue="yes" />
                      <span>Yes</span>
                    </label>
                    <label className="YesNo ml-2">
                      <input type="radio" name="radio-button" defaultValue="no" />
                      <span>No</span>
                    </label>
                  </fieldset>
               </div>
              
              
      
           
                <div className="col-12 d-flex contactBottomText_last">
                   <div className="col-6">
                    <h5><Link to='/Contact' className='backBtn_2'><span>&#8592; Back to the homepage</span></Link></h5>
                   </div>
                   <div className="col-6">
                     <Link to="#"><span>Skip for now</span></Link>
                     <Link to='/InvestPref' className='nextBtn_2'><span>Next step &#8594;</span></Link>
                   </div>
                </div>
      
                    <div>                
                </div>                 
            </div>
        )
    }
}