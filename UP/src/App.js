import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './component/general/Header'
import Contact from './component/home/Contact';
import Invest from './component/home/Invest';
import InvestPref from './component/home/InvestPref';



export default class App extends Component{
  render(){
    return (
    
      <Router>
      <div id="main">
        <div className="container-fluid">
            <div className="col-12">
              <div className="content row">


      <Header/>
      
    
      <Switch>
        <Route path="/Invest"  component={Invest} />
        <Route path="/InvestPref" component={InvestPref} />
        <Route path="/"  component={Contact} />
      </Switch>
 
    
         </div>
        </div>
       </div>
      </div>
    </Router>
    
    );
  }
}

 