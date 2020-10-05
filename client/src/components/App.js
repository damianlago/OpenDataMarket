import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Index from './index/Index'
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Index />} />
    </Switch>
  );
}

export default App;
