import React from 'react';
import './style.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { getData } from './data/Data';

import Home from './containers/Home/Home';
import Entrepreneurs from './containers/Entrepreneurs/Entrepreneurs';

const App = () => {
  
  getData();
  
  return(
    <>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component = { Home } />
          <Route exact path="/Emprendimientos" component = { Entrepreneurs } />
        </Switch>
      </Layout>
    </BrowserRouter>
  </>
  )
}

export default App;
