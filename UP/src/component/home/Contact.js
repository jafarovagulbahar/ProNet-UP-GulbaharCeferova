import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const countary=[
  {
    id:1,
    countaryItem:'Azerbaijan'
  },
  {
    id:2,
    countaryItem:'United States'
  },
  {
    id:3,
    countaryItem:'Turkey'
  },
  {
    id:4,
    countaryItem:'France'
  },
  {
    id:5,
    countaryItem:'Iran'
  }
]



export default class Contact extends Component{

    render(){
        return(       
           
          //  <!-- Contact Details -->

            <div className="col-sm-8 secondContent" id="contact">
               <div className="general-Header col-12 d-flex">
    
                  <div className="col-6 headerText">
                    <h4>STEP 1 OF 3</h4>
                  </div>
    
                    <div className="col-6 headerText">
                      <h5>Lost or have trouble? <span><a href="#">Get Help ➝</a></span></h5>
                  </div>
               </div>
                
        
               <div className="col-12  contactHeadText">
                 <h1>Сontact details</h1>
                 <p>Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you</p>
               </div>
    
                <div className="col-12 row d-flex ContactForm">
                  
                <div className="md-form col-sm-4">
                    <input type="text" id="materialContactFormName" className="form-control" />
                    <label htmlFor="materialContactFormName">Full Name</label>
                </div>
    
               
                <div className="md-form col-sm-4">
                     <div className="input-phone"></div>
                </div>
    
    
                
                <div className="md-form col-sm-8">
                    <input type="email" id="materialContactFormEmail" className="form-control" />
                    <label htmlFor="materialContactFormEmail">Email Adress</label>
                </div>
    
                  <div className="md-form col-sm-8">
                    <input type="text" id="materialContactFormSelect" className="form-control  dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                    <span className='caretContry'></span>
                      <label className="countaryLabel" htmlFor="materialContactFormSelect">Countary</label>
                       <div className="dropdown-menu dropMenuCountry" id="dropMenuCountry" aria-labelledby="materialContactFormSelect">

                      {countary.map(({countaryItem}, id)=>
                          <span key={id}> <a className="dropdown-item" href="#">{countaryItem}</a> <input type="hidden" defaultValue={countaryItem} /></span>
                      )}                  
                  
                     </div>
                  </div>
                </div>
            
               <div className="col-12 contactBottomText" >
                  <h1>Privacy policy</h1>
                  <p>We know you care about how your personal information is used and shared, so we take your privacy seriously</p>
                  <h5><a href="#">Expand privacy policy &#8594;</a></h5>
               </div>
    
             
                <div className="col-12 d-flex contactBottomText_last">
                   <div className="col-6">
                      <h5><Link to='/Contact' className='backBtn_1'><span>&#8592; Back to the homepage </span></Link></h5>
                   </div>
                   <div className="col-6">
                    <Link to="#">  <span>Skip for now</span></Link>
                    <Link to='/Invest' className='nextBtn_1'><span>Next step &#8594;</span></Link>
                   </div>
                </div>  

        

            </div>
        )
    }
}