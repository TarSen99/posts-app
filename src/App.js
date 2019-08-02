import React from 'react';

import { Route, Switch } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Post from './containers/Post'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  )
};

export default App
