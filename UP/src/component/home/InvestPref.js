import React, {Component} from 'react';
import { Link } from 'react-router-dom';


const cardLink=[
   {
      index:1,
      title:'Single family'
   },
   {
      index:2,
      title:'Residential multifamily'
   },
   {
      index:3,
      title:'Commercial retail'
   },
   {
      index:4,
      title:'Commercial industrial'
   },
   {
      index:5,
      title:'Commercial hospitality'
   },
   {
      index:6,
      title:'Commercial warehousing'
   },
   {
      index:7,
      title:'Commercial office'
   },
   {
      index:8,
      title:'Other'
   }
]

export default class Investa extends Component{
    render(){
        return(             
            // <!-- Investment preferences -->
      <div className="col-sm-8 secondContent" id="InvestmentPref">
         <div className="general-Header col-12 d-flex">

            <div className="col-6 headerText">
              <h4>STEP 3 OF 3</h4>
            </div>

              <div className="col-6 headerText">
                <h5>Lost or have trouble? 
                  <span><a href="#/"> Get Help ➝</a></span>
                </h5>
            </div>
         </div>
          
      
         <div className="col-12  contactHeadText">
           <h1>Investment preferences</h1>
           <p>This will help us figure out what
            your investment options are so that 
            we can show you only possibly intresting 
            for you deals</p>
         </div>

    
         <div className="col-12 investCenterText">
           <h3>What kind of real estate are you interested in?</h3>

            <div className="col-10 row justify-content-center interested pl-0 mt-2">
           
            {cardLink && cardLink.map(({title}, index)=>      
               <label className="col-lg-3 col-6" key={index}>
                  <input type="checkbox" name={title}/>
                  <span><p>{title}</p></span>
               </label>
            
            )}
           
          </div>
         </div>
      
          <div className="col-12 d-flex contactBottomText_last">
             <div className="col-6">
                <h5><Link to='/Invest'  className='backBtn_3'><span>&#8592; Back to the previous step</span></Link></h5>
             </div>
             <div className="col-6">
               <Link to="#/"><span>Skip for now</span></Link>
               <Link to="#/" className='finishBtn'><span>Finish &#8594;</span></Link>
             </div>
          </div>

           <div>
            
          </div>
      </div>
        )
    }
}