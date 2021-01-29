import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';


const headerLinks=[
  {
      i :1,
      page :'Contact Deatils',
      path :'/Contact',
    },
    {
      i :2,
      page :'Investment Plans',
      path :'/Invest'
    },
    {
      i :2,
      page :'Contact Deatils',
      path :'/InvestPref'
    } 
]

export default function Header(){
  // const history=useHistory()

  let page_3=useRouteMatch({
    path:'/InvestPref'
  })
  let page_2=useRouteMatch({
    path:'/Invest'
  })
  let page_1=useRouteMatch({
    path:'/'
  })

 
    return (
      <div className="col-sm-4" id="navbar">
         
                <div className="col-12 logo">
                  <a href="/#"><img src="assets/images/logo.png" alt='logo' /></a>
                </div>
        
              <nav className="col-12 menus d-flex align-items-center ">
                     <ul>
                        {headerLinks.map(({path ,page}, id) =>(
                          <li key={id}  >
                            <span></span>
                            <Link to={path}> {page}</Link>
                          </li>
                      ))}
                    </ul>
              </nav>
          
              {/* Quote- Component Router*/}
             <div className="col-12 quote_content">                
                  <div className="quote">
                  <span></span>

                    <div className="quote_text">
                      {
                       page_3 ?
                         <p>United Properties is about fast & easy searching, buying, 
                           selling and investing ever — online, with an expert by our side</p>
                      :page_2 ?
                      <p>Save from thousands to millions on your deal. Secure the best possible. 
                          And get independent, unbiased advice for free</p>
                      :page_1 ? 
                      <p>We care about your time, that's why we created a 3-stage onboarding 
                         that will not take more than 5 minutes to complete</p>
                      :null }                 
                    </div>

                    <div className="author-logo d-flex w-100">
                      <div className="authorName">
                        { page_3 ?
                        <h3>Ollie Mcmahon</h3>
                        :page_2 ? 
                        <h3>Jodie Sears</h3>
                        :page_1 ? 
                        <h3>William Mac</h3>
                        :null }

                        {page_3 ?
                        <h6>MANAGING DIRECTOR</h6>
                        :page_2 ? 
                        <h6>UNITEDPROPERTIES’ AGENT</h6>
                        :page_1 ? 
                        <h6>CO-FOUNDER, INVESTOR</h6>
                        :null }
                    </div>

                    <div className="subLogo">
                      <img src="assets/images/up.png" alt='up' />
                    </div>
                  </div>
                </div>
              
            </div> 
             
              
           </div>
        
         
      
    );
  }

  