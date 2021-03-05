import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { ContactUs } from './components/pages/ContactPage';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Switch>
        {/* Public Routes */}
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </div>
  );
};

export default App;
