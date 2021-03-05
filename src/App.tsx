import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { ContactUs, HomePage } from './components/pages';
import { BlogPage } from './components/pages/BlogPage';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Switch>
        {/* Public Routes */}
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/blog" component={BlogPage} />
      </Switch>
    </div>
  );
};

export default App;
