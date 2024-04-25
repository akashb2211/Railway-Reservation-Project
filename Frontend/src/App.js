import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login';
import GetAllRecord from './components/dashBoard';

// Higher-order component for protected routes
const ProtectedRoute = ({ component: Component, ...rest }) => {
  debugger;


  if (sessionStorage.getItem('isUserLoggedIn')) {
    return <Route {...rest} component={Component} />;
  } else {
    return <Redirect to="/login" />;
  }
};

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/login/dash" component={GetAllRecord} />
          {/* Add more routes here if needed */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
