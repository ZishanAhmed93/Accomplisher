import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import AccomplishmentDetails from './components/accomplishments/AccomplishmentDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateAccomplishment from './components/accomplishments/CreateAccomplishment'

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
        	<div className="App">
        		<Navbar />
				
				<Switch>
					<Route exact path='/' component={Dashboard} />
          <Route path='/accomplishment/:id' component={AccomplishmentDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateAccomplishment} />
 				</Switch>
		
			</div>
		</BrowserRouter>
    );
  }
}

export default App;
