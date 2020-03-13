import React from 'react';
import AppLayout from './components/Layouts/app'
import SignIn from './components/SignIn'
import Product from './components/Product'
import { AuthWrapper } from './components/Utilities'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <AppLayout>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <AuthWrapper><Product /></AuthWrapper>} />
          <Route path="/signin" component={SignIn} />
          <Route path="/product" component={() => <AuthWrapper><Product /></AuthWrapper>} />
          <Route path="*" component={() => <h1 style={{ textAlign: 'center' }}>404 Page Not Found</h1>} />
        </Switch>
      </Router>
    </AppLayout>
  );
}

export default App;
