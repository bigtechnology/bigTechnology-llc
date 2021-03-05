import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { ContactUs, HomePage } from './components/pages';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Switch>
        {/* Public Routes */}
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </div>
  );
};

export default App;
