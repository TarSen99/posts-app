import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
