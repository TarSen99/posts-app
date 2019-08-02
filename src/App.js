import React from 'react';

import { Route, Switch } from "react-router-dom";

import asyncComponent from './components/AsyncComponent'

const Header = asyncComponent(() => import("./components/Header"));
const Footer = asyncComponent(() => import("./components/Footer"));
const NotFound = asyncComponent(() => import("./components/NotFound"));
const Home = asyncComponent(() => import("./components/Home"));
const Post = asyncComponent(() => import("./containers/Post"));

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
